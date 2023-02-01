
import { appendChildElements } from "../../utils/appendChild";
import { profileMetaAttrButtons, profileMetaAttrInputs } from "./metaAttrsProfileForm";
import { hideElement, showElement, removeElement } from "../../utils/functions";
import { getProfilePage } from "./tmpls";
import { Component } from "../../components/components/components";
import { signOut } from "../../utils/functions";
import { Button } from "../../components/button/button";
import { Input } from "../../components/inputObject/input";
import { profileForm } from "./profileFormMetaAttr";


const closeProfilePage = (): void => {
    removeElement("profile-main")
    showElement("chat-window");
};




export const openProfilePage = (): void => {
    let profilePage: HTMLElement = getProfilePage();
    let profilebuttons: Button[] = [...profileMetaAttrButtons()];
    let profileinputs: Input[] = [...profileMetaAttrInputs()];
        
    hideElement("chat-window");
    appendChildElements("root", [profilePage]);
    appendChildElements("profile-form-input", profileinputs.map(item => item._elem));
    appendChildElements("profile-form-input", [profilebuttons[0]._elem, profilebuttons[1]._elem, profilebuttons[2]._elem]);
    appendChildElements("profile-sidebar", [profilebuttons[3]._elem]);

    profilebuttons[2].eventBus.on(Component.EVENTS.buttonClick, signOut);
    profilebuttons[3].eventBus.on(Component.EVENTS.buttonClick, closeProfilePage);


}



