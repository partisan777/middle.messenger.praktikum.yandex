import { Component } from "../../components/components/components";
import { appendChildElements } from "../../utils/appendChild";
import { metaAttrInputsReg, metaAttrButtonsReg } from "./metaAttrsReg";
import { metaAttrButtonsLog, metaAttrInputsLog } from "./metaAttrsLogin";
// import { divreg, divlogin } from './tmpls'
import { loginForm, regForm } from "./regFormMetaAttrs";
import { signIn } from "../../utils/functions";
import { Input } from "../../components/inputObject/input";
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


    
    const registrationButtonReg = (): void => {
        signIn();
        console.log(this.event.target);
    }
    regbuttons[0].eventBus.on(Component.EVENTS.buttonClick, registrationButtonReg);

    // Действие при клике на Есть аккаунт 
    const registrationButtonHasAcc = (): void => {
        switchRegLogForm();
    }
    regbuttons[1].eventBus.on(Component.EVENTS.buttonClick, registrationButtonHasAcc);
    

    //Действие при клике на Вход
    const loginButton = (): void => {
        signIn();
        console.log(document.getElementById('form-login'));
    }
    logbuttons[0].eventBus.on(Component.EVENTS.buttonClick, loginButton);

    // Действие при клике на Нет аккаунтa
    const logButtonHasAcc = (): void => {
        switchRegLogForm();
        
    }
    // logbuttons[1].eventBus.on(Component.EVENTS.buttonClick, logButtonHasAcc); Component.EVENTS.focusInput,
    loginputs[0].eventBus.on(Component.EVENTS.onBlurInput, console.log(this));

};