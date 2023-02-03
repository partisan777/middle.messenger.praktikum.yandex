import { Component } from "../../components/components/components";
import { appendChildElements } from "../../utils/appendChild";
import { metaAttrInputsReg, metaAttrButtonsReg } from "./metaAttrsReg";
import { metaAttrButtonsLog, metaAttrInputsLog } from "./metaAttrsLogin";
import { loginForm, regForm } from "./regFormMetaAttrs";
import { signIn } from "../../utils/functions";
import { Input } from "../../components/inputObject/input";
import { Button } from "../../components/button/button";
import { checkInput, submitRegForm } from "../../utils/formValidate";




export function addRegForm (idRootElement: string = "root"): void {

    let isReg: boolean = false;

    let regHTML: HTMLElement = regForm.document();
    let logHTML: HTMLElement = loginForm.document();
   
    
    let regbuttons: [Button] = [...metaAttrButtonsReg()];
    let reginputs: [Input] = [...metaAttrInputsReg()];
    let logbuttons: [Button] = [...metaAttrButtonsLog()];
    let loginputs: [Input] = [...metaAttrInputsLog()];

    appendChildElements(idRootElement, [regHTML]);
    appendChildElements("reg-form-child", reginputs.map(item => item.document()));
    appendChildElements("reg-form-child", regbuttons.map(item => item.document()));
    appendChildElements(idRootElement, [logHTML]);
    appendChildElements("log-form-child", loginputs.map(item => item.document()));
    appendChildElements("log-form-child", logbuttons.map(item => item.document()));

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


    regForm.eventBus.on(Component.EVENTS.submitForm, submitRegForm);
    // console.log(regForm)
    // regForm.eventBus.on(Component.EVENTS.submitRegForm, console.log(1111));
    logbuttons[1].eventBus.on(Component.EVENTS.buttonClick, logButtonHasAcc); 
    // loginputs[0].eventBus.on(Component.EVENTS.submitRegForm, console.log(loginputs[0]));
    
    // loginputs[0].eventBus.on(Component.EVENTS.blurInput, checkInput);
    // loginputs[1].eventBus.on(Component.EVENTS.blurInput, checkInput);
    reginputs.forEach(item => item.eventBus.on(Component.EVENTS.blurInput, checkInput));

};