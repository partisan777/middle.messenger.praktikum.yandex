import { Component } from "../../components/components/components";
import { appendChildElements } from "../../utils/appendChild";
import { metaAttrInputsReg, metaAttrButtonsReg } from "./metaAttrsReg";
import { metaAttrButtonsLog, metaAttrInputsLog } from "./metaAttrsLogin";
// import { divreg, divlogin } from './tmpls'
import { loginForm, regForm } from "./regFormMetaAttrs";
import { signIn } from "../../utils/functions";
import { input, Input } from "../../components/inputObject/input";
import { Button } from "../../components/button/button";


export function addRegForm (idRootElement: string = "root"): void {

    let isReg: boolean = false;

    let regHTML: HTMLElement = regForm._elem;
    let logHTML: HTMLElement = loginForm._elem;
   
    
    let regbuttons: [Button] = [...metaAttrButtonsReg()];
    let reginputs: [Input] = [...metaAttrInputsReg()];
    let logbuttons: [Button] = [...metaAttrButtonsLog()];
    let loginputs: [Input] = [...metaAttrInputsLog()];

    appendChildElements(idRootElement, [regHTML]);
    appendChildElements("reg-form-child", reginputs.map(item => item._elem));
    appendChildElements("reg-form-child", regbuttons.map(item => item._elem));
    appendChildElements(idRootElement, [logHTML]);
    appendChildElements("log-form-child", loginputs.map(item => item._elem));
    appendChildElements("log-form-child", logbuttons.map(item => item._elem));

    regHTML.style.display='none';
   
    function switchRegLogForm(): void {
        if (isReg === false) {
            isReg = true;
            logHTML.style.display='none';
            regHTML.style.display='flex';
        } else {
            isReg = false;
            logHTML.style.display='flex';
            regHTML.style.display='none';
        }
    }


    function submitRegForm (): void  {
        const list_objects: object[] = event.target.form.querySelectorAll("input")
        for (let i: number = 0; i < list_objects.length; i++) {
            checkRegInput(list_objects[i])
        }
    }
    
    const registrationButtonReg = (): void => {
        signIn();
    }
    regbuttons[0].eventBus.on(Component.EVENTS.buttonClick, submitRegForm);

    // Действие при клике на Есть аккаунт 
    const registrationButtonHasAcc = (): void => {
        switchRegLogForm();
    }
    regbuttons[1].eventBus.on(Component.EVENTS.buttonClick, registrationButtonHasAcc);
    

    //Действие при клике на Вход
    const loginButton = (): void => {
        signIn();
        // console.log(document.getElementById('form-login'));
    }
    logbuttons[0].eventBus.on(Component.EVENTS.buttonClick, loginButton);

    // Действие при клике на Нет аккаунтa
    const logButtonHasAcc = (): void => {
        switchRegLogForm();
    }


    const checkPatternData: Object = {
        email: {regexp: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu, error_message: 'Укажите верный e-mail'},
        login: {regexp: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{3,25}$/iu, error_message: 'Укажите верный логин'},
        first_name: {regexp: /^[A-ZА-Я]{1}[a-zа-я]{0,254}$$/iu, error_message: 'Укажите верное имя'},
        second_name: {regexp: /^[A-ZА-Я]{1}[a-zа-я\-]{0,254}$/iu, error_message: 'Укажит верную фамилию'},
        display_name: {regexp: '', error_message: 'Укажите верное отображаемое имя'},
        phone:  {regexp: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, error_message: 'Укажите верный номер телефона'},
        password: {regexp: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}$/g, error_message: 'Пароль не соответствует правилу'},
        password_confirm: {regexp: '', error_message: 'Пароли не совпадают'}
    }


    const checkRegInput = (input: object): void => {
        const value: string = input.value;
        const checktype: string = input.getAttribute("checktype");
        const error_message: string = checkPatternData[checktype].error_message;
        let regexp: string = checkPatternData[checktype].regexp;
        let countErrors : number = 0;
        console.log(checktype, value);
        if (!regexp.test(value)) {
            input.nextSibling.parentNode.childNodes[4].innerHTML = error_message;
            countErrors = countErrors + 1
        } else {
            input.nextSibling.parentNode.childNodes[4].innerHTML = ''
        }


        if (countErrors != 0) {
            throw new Error('Заполните правильно поля');
        }
    }    
    const checkInput = () => {
        checkRegInput(event.srcElement);
    }


    regForm.eventBus.on(Component.EVENTS.submitForm, submitRegForm);
    // console.log(regForm)
    // regForm.eventBus.on(Component.EVENTS.submitRegForm, console.log(1111));
    logbuttons[1].eventBus.on(Component.EVENTS.buttonClick, logButtonHasAcc); 
    // loginputs[0].eventBus.on(Component.EVENTS.submitRegForm, console.log(loginputs[0]));
    
    // loginputs[0].eventBus.on(Component.EVENTS.blurInput, checkInput);
    // loginputs[1].eventBus.on(Component.EVENTS.blurInput, checkInput);
    reginputs.forEach(item => item.eventBus.on(Component.EVENTS.blurInput, checkInput));

};