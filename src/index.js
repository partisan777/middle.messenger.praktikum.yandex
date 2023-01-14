import { regForm } from './components/registration/registration.js';
import { loginForm } from './components/login/login.js';
import { isAuth, logIn, logOff, registrationNewUser } from './modules/auth/auth.js';
import { getChatWindow } from './components/chatWindow/chatWindow';
import { getChatItems } from './components/chatItems/chatItems.js';
import { getProfilePage } from './components/profile/profile.js';
import { getModalWindow } from './components/modalWindow/modalWindow.js';
import { changePasswordForm } from './components/changePassswordForm/changePasswordForm.js';
import { getAddFilesMenu } from './components/addMenu/addMenuAddFiles.js';
import { getChatMenu } from './components/addMenu/addChatMenu.js';
<<<<<<< HEAD
import { manageChatUserForm } from './components/chatUserManage/chatUserManage.js';
=======
import { getAddChatUserForm, getDeleteChatUserForm } from './components/chatUserManage/chatUserManage.js';
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
import { getAddAvatarForm } from './components/profile/getAddAvatarForm.js';


const signIn = () => {
    const reg = document.getElementById("reg-form");
    if (reg) {  reg.parentNode.removeChild(reg);
    }
    const login = document.getElementById("login-form");
    if (login) {
        login.parentNode.removeChild(login);
    }
    logIn();
    checkAuth();
};

const registration = () => {
    registrationNewUser();
    signIn();
};


const signOut = () => {
    const root = document.getElementById("root");
    while (root.firstChild) {
        root.removeChild(root.firstChild);    
    }
    logOff();
    checkAuth();
};

const removeElement = (elementId) => {
    const elem = document.getElementById(elementId)
    if (elem) {
        elem.remove();
    }
};

const removeAllChildElements = (elementId) => {
    const elem = document.getElementById(elementId)
    elem.replaceChildren();
};


function hideElement(id) {
    document.getElementById(id).style.display = "none";
};

function showElement(id) {
    document.getElementById(id).style.display = "flex";
};


const addLoginForm = () => {
    const root = document.getElementById("root");
    root.appendChild(loginForm());
    document.getElementById("login-button").addEventListener("click", signIn);
    document.getElementById("registration-button").addEventListener("click", switchRegLogin);
<<<<<<< HEAD
    document.getElementById("form-login-main").addEventListener("submit", handleSubmit);
=======
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
};

const addRegForm = () => {
    const root = document.getElementById("root");
    root.appendChild(regForm());
    document.getElementById("registration-button").addEventListener("click", registration);
    document.getElementById("login-button").addEventListener("click", switchRegLogin);
};


const switchRegLogin = () => {
    const reg = document.getElementById("reg-form");
    if (reg) {
        removeElement("reg-form");
        addLoginForm();
    } else {
        removeElement("login-form");
        addRegForm();
    };
};

function addFormAddAvatar() {
    const modal = document.getElementById("myModal");
    openModalWindow();
    const modalContent = document.getElementById("modal-content")
    modalContent.appendChild(getAddAvatarForm());
    document.getElementById("close-add-avatar-button").addEventListener("click", closeModalWindow);
    document.getElementById("save-avatar-button").addEventListener("click", closeModalWindow);
};


function openProfile() {
    hideElement("chat-window");
    const root = document.getElementById("root");
    root.appendChild(getProfilePage());
    document.getElementById("profile-logout").addEventListener("click", signOut);
    document.getElementById("profile-sidebar").addEventListener("click", closeProfile);
    document.getElementById("profile-change-password").addEventListener("click", addFormChangePassword);
    document.getElementById("profile-avatar").addEventListener("click", addFormAddAvatar);
};

function addFormChangePassword() {
    const modal = document.getElementById("myModal");
    openModalWindow();
    const modalContent = document.getElementById("modal-content")
    modalContent.appendChild(changePasswordForm());
    document.getElementById("close-change-password-form-button").addEventListener("click", closeModalWindow);
}

function openModalWindow() {
    const modal = document.getElementById("myModal");
    showElement("myModal");
    removeAllChildElements("modal-content");
}

function closeModalWindow() {
    const modal = document.getElementById("myModal");
    hideElement("myModal");
    removeAllChildElements("modal-content");
}

function addMenuAddFiles () {
    const root = document.getElementById("root");
    root.appendChild(getAddFilesMenu());
}


function addFormChatUser() {
    const modal = document.getElementById("myModal");
    openModalWindow();
    const modalContent = document.getElementById("modal-content")
<<<<<<< HEAD
    modalContent.appendChild(manageChatUserForm('add'));
=======
    modalContent.appendChild(getAddChatUserForm());
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
    document.getElementById("close-manage-chat-user").addEventListener("click", closeModalWindow);
}

function deleteFormChatUser() {
    const modal = document.getElementById("myModal");
    openModalWindow();
    const modalContent = document.getElementById("modal-content")
<<<<<<< HEAD
    modalContent.appendChild(manageChatUserForm('del'));
=======
    modalContent.appendChild(getDeleteChatUserForm());
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
    document.getElementById("close-manage-chat-user").addEventListener("click", closeModalWindow);
}


<<<<<<< HEAD


=======
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
const closeChatMenu = () => {
    removeElement("chat-menu-list")
}

function addChatMenu () {
    const root = document.getElementById("root");
    root.appendChild(getChatMenu());
    document.getElementById("add-user").addEventListener("click", addFormChatUser);
    document.getElementById("delete-user").addEventListener("click", deleteFormChatUser);
    root.addEventListener("click", closeChatMenu);
    root.removeEventListener("click", closeChatMenu);
}

function getMainWindow() {
    const root = document.getElementById("root");
    root.appendChild(getChatWindow());
    let divchatitem = document.getElementById("chat-sidebar");
    divchatitem.appendChild(getChatItems());   
    document.getElementById("button-profile").addEventListener("click", openProfile);
    document.getElementById("add-button").addEventListener("click", addMenuAddFiles);
    document.getElementById("chat-menu").addEventListener("click", addChatMenu);
    root.appendChild(getModalWindow());
};


function closeProfile() {
    removeElement("profile-main");
    showElement("chat-window");
};

const checkAuth = () => {
    if (isAuth() === false) {
        addLoginForm();
    } else {
        getMainWindow();
    };
};

<<<<<<< HEAD

function handleSubmit(e) {
    e.preventDefault();
    console.log(e)
};





=======
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
checkAuth();



<<<<<<< HEAD
=======

>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
