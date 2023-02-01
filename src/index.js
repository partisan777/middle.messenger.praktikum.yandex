// import { regForm } from './components/registration/registration.js';
// import { loginForm } from './components/login/login.js';
// logIn, logOff, registrationNewUser } from './modules/auth/auth.js';
// import { getChatWindow } from './components/chatWindow/chatWindow';
// import { getChatItems } from './components/chatItems/chatItems.js';
// import { getProfilePage } from './components/profile/profile.js';
// import { getModalWindow } from './components/modalWindow/modalWindow.js';
// import { changePasswordForm } from './components/changePassswordForm/changePasswordForm.js';
// import { getAddFilesMenu } from './components/addMenu/addMenuAddFiles.js';
// import { getChatMenu } from './components/addMenu/addChatMenu.js';
// import { manageChatUserForm } from './components/chatUserManage/chatUserManage.js';
// import { getAddAvatarForm } from './components/profile/getAddAvatarForm.js';

import { addRegForm } from "./pages/regForm/regForm";
import { addMainWindow } from "./pages/mainWindow/mainWindow";
import {  isAuth, logIn, logOff, registrationNewUser } from './utils/auth';
import { signIn, signOut } from "./utils/functions";
// addRegForm()
// addMainWindow()



const checkAuth = () => {
     if (isAuth() === false) {
      signOut()
     } else {
      signIn()
     };
 };

checkAuth()







 
// const signIn = () => {
//     const reg = document.getElementById("reg-form");
//     if (reg) {  reg.parentNode.removeChild(reg);
//     }
//     const login = document.getElementById("login-form");
//     if (login) {
//         login.parentNode.removeChild(login);
//     }
//     logIn();
//     checkAuth();
// };









// function addFormAddAvatar() {
//     const modal = document.getElementById("myModal");
//     openModalWindow();
//     const modalContent = document.getElementById("modal-content")
//     modalContent.appendChild(getAddAvatarForm());
//     document.getElementById("close-add-avatar-button").addEventListener("click", closeModalWindow);
//     document.getElementById("save-avatar-button").addEventListener("click", closeModalWindow);
// };


// function openProfile() {
//     hideElement("chat-window");
//     const root = document.getElementById("root");
//     root.appendChild(getProfilePage());
//     document.getElementById("profile-logout").addEventListener("click", signOut);
//     document.getElementById("profile-sidebar").addEventListener("click", closeProfile);
//     document.getElementById("profile-change-password").addEventListener("click", addFormChangePassword);
//     document.getElementById("profile-avatar").addEventListener("click", addFormAddAvatar);
// };

// function addFormChangePassword() {
//     const modal = document.getElementById("myModal");
//     openModalWindow();
//     const modalContent = document.getElementById("modal-content")
//     modalContent.appendChild(changePasswordForm());
//     document.getElementById("close-change-password-form-button").addEventListener("click", closeModalWindow);
// }


// }

// function addMenuAddFiles () {
//     const root = document.getElementById("root");
//     root.appendChild(getAddFilesMenu());
// }


// function addFormChatUser() {
//     const modal = document.getElementById("myModal");
//     openModalWindow();
//     const modalContent = document.getElementById("modal-content")
//     modalContent.appendChild(manageChatUserForm('add'));
//     document.getElementById("close-manage-chat-user").addEventListener("click", closeModalWindow);
// }

// function deleteFormChatUser() {
//     const modal = document.getElementById("myModal");
//     openModalWindow();
//     const modalContent = document.getElementById("modal-content")
//     modalContent.appendChild(manageChatUserForm('del'));
//     document.getElementById("close-manage-chat-user").addEventListener("click", closeModalWindow);
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





// checkAuth();



