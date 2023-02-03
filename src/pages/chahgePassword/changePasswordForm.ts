import { Input } from "../../components/inputObject/input";
import { Button } from "../../components/button/button";
import { appendChildElements } from "../../utils/appendChild";
import { metaAttrInputsChangePassword, metaAttrButtonsChangePassword, changepassForm } from "./changePasswordWetaAttrs";   
import {  removeAllChildElements, showElement, hideElement } from "../../utils/nodeObjectManipulation"; 
import { Component } from "../../components/components/components";
//closeModalWindow,
export const changePasswordForm = (): void => {
    
    let chanpassHTML: HTMLElement = changepassForm.document();
    const changePasswordInputs: Input[] = metaAttrInputsChangePassword();
    const changePasswordButton: Button[] = metaAttrButtonsChangePassword();
    changepassForm.hide();

    appendChildElements("modal-content", [chanpassHTML]);
    appendChildElements("chan-pass-form-child", changePasswordInputs.map(item => item._elem));
    appendChildElements("chan-pass-form-child", changePasswordButton.map(item => item._elem));

    
    const openModalWindow = (): void => {
        showElement("myModal");
        changepassForm.show();
    }
    const closeModalWindow = (): void => {
        changepassForm.hide();
        hideElement("myModal");
    }

    changePasswordButton[1].eventBus.on(Component.EVENTS.buttonClick, closeModalWindow)
    
    

};

