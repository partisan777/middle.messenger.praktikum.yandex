// import { regForm } from './components/registration/registration.js';

// import { isAuth, logIn, logOff, registrationNewUser } from './modules/auth/auth.js';
// import { getChatWindow } from './components/chatWindow/chatWindow';
// import { getChatItems } from './components/chatItems/chatItems.js';
// import { getProfilePage } from './components/profile/profile.js';
// import { getModalWindow } from './components/modalWindow/modalWindow.js';
// import { changePasswordForm } from './components/changePassswordForm/changePasswordForm.js';
// import { getAddFilesMenu } from './components/addMenu/addMenuAddFiles.js';
// import { getChatMenu } from './components/addMenu/addChatMenu.js';
// import { manageChatUserForm } from './components/chatUserManage/chatUserManage.js';
// import { getAddAvatarForm } from './components/profile/getAddAvatarForm.js';

import { addMainWindow } from "../pages/mainWindow/mainWindow";
import { addRegForm } from "../pages/regForm/regForm";
import {logIn, logOff}  from "./auth"

export const signOut = (): void => {
    removeAllChildElements("root")
    logOff();
    addRegForm()
};

export const signIn = (): void => {
    removeAllChildElements("root");
    logIn();
    addMainWindow();
}

export function hideElement(elementId: string): void {
        document.getElementById(elementId).style.display = "none";
    };
    
export function showElement(elementId: string): void {
        document.getElementById(elementId).style.display = "flex";
    };

export const removeElement = (elementId: string): void => {
    const elem = document.getElementById(elementId)
    if (elem) {
        elem.remove();
    }
};

export const removeAllChildElements = (elementId: string): void => {
    const elem = document.getElementById(elementId)
    elem.replaceChildren();
};



// function openModalWindow() {
//     const modal = document.getElementById("myModal");
//     showElement("myModal");
//     removeAllChildElements("modal-content");
// }

// function closeModalWindow() {
//     const modal = document.getElementById("myModal");
//     hideElement("myModal");
//     removeAllChildElements("modal-content");
// }




// function deleteFormChatUser() {
//     const modal = document.getElementById("myModal");
//     openModalWindow();
//     const modalContent = document.getElementById("modal-content")
//     modalContent.appendChild(manageChatUserForm('del'));
//     document.getElementById("close-manage-chat-user").addEventListener("click", closeModalWindow);
// }




// const closeChatMenu = () => {
//     removeElement("chat-menu-list")
// }

// function addChatMenu () {
//     const root = document.getElementById("root");
//     root.appendChild(getChatMenu());
//     document.getElementById("add-user").addEventListener("click", addFormChatUser);
//     document.getElementById("delete-user").addEventListener("click", deleteFormChatUser);
//     root.addEventListener("click", closeChatMenu);
//     root.removeEventListener("click", closeChatMenu);
// }

// function getMainWindow() {
//     const root = document.getElementById("root");
//     root.appendChild(getChatWindow());
//     let divchatitem = document.getElementById("chat-sidebar");
//     divchatitem.appendChild(getChatItems());   
//     document.getElementById("button-profile").addEventListener("click", openProfile);
//     document.getElementById("add-button").addEventListener("click", addMenuAddFiles);
//     document.getElementById("chat-menu").addEventListener("click", addChatMenu);
//     root.appendChild(getModalWindow());
// };


// function closeProfile() {
//     removeElement("profile-main");
//     showElement("chat-window");
// };

// const checkAuth = () => {
//     if (isAuth() === false) {
//         addLoginForm();
//     } else {
//         getMainWindow();
//     };
// };


// function handleSubmit(e) {
//     e.preventDefault();
//     console.log(e)
// };







