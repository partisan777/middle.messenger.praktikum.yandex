
import { appendChildElements } from "../../utils/appendChild";
import { profileMetaAttrButtons, profileMetaAttrInputs } from "./metaAttrsProfileForm";
import { hideElement, showElement, removeElement } from "../../utils/functions";
import { getProfilePage } from "./tmpls";
import { Component } from "../../components/components/components";
import { signOut } from "../../utils/functions";
import { Button } from "../../components/button/button";
import { Input } from "../../components/inputObject/input";
import { profileForm } from "./profileFormMetaAttr";
import { changePasswordForm, openModalWindowChangePassword } from "../chahgePassword/changePasswordForm";

const closeProfilePage = (): void => {
    removeElement("profile-main")
    showElement("chat-window");
};
// changePasswordForm();
// openModalWindowChangePassword

export const openProfilePage = (): void => {
    let profilePage: HTMLElement = getProfilePage();
    let profilebuttons: Button[] = [...profileMetaAttrButtons()];
    let profileinputs: Input[] = [...profileMetaAttrInputs()];
    changePasswordForm();    
    hideElement("chat-window");
    appendChildElements("root", [profilePage]);
    appendChildElements("profile-form-input", profileinputs.map(item => item.document()));
    appendChildElements("profile-form-input", [profilebuttons[0].document(), profilebuttons[1].document(), profilebuttons[2].document()]);
    appendChildElements("profile-sidebar", [profilebuttons[3].document()]);
    
    profilebuttons[2].eventBus.on(Component.EVENTS.buttonClick, signOut);
    profilebuttons[3].eventBus.on(Component.EVENTS.buttonClick, closeProfilePage);
    profilebuttons[1].eventBus.on(Component.EVENTS.buttonClick, openModalWindowChangePassword);
    
}



