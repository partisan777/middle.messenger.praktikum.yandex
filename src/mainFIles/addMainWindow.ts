import { Component } from "../models/components/components";

import { MainWindow } from "../pages/mainWindow/mainWindow"
import { AddFilesPage } from "../pages/addFilesMenu/addFilesMenu"
import { AddFileFormPage } from "../pages/addFilesPages/addFile";
import { AddFotoVideoFormPage } from "../pages/addFilesPages/addFotoVideo";
import { AddLocationFormPage } from "../pages/addFilesPages/addLocation";

import { ChatMenuPage } from "../pages/chatMenu/chatMenu";
import { AddUserFormPage } from "../pages/chatMenuPages/addUserPage";
import { DelUserFormPage } from "../pages/chatMenuPages/delUserPage";

import { ProfileFormPage } from "../pages/profile/profileForm"
import { ChangePasswordFormPage } from "../pages/changePassword/changePassword";
import { ChangeAvatarFormPage } from "../pages/changeAvatar/changeAvatar";
import { logOff } from "../utils/auth";


export function addMainWindowFull(): void {
    const container = document.getElementById("root");

    
    const changePasswordFormPage: Component = new ChangePasswordFormPage({pageTitle: 'Изменение пароля'})
    const changeAvatarFormPage: Component = new ChangeAvatarFormPage({pageTitle: 'Изменение аватара'})
    const profileFormPage: Component = new ProfileFormPage({pageTitle: 'Профиль',
        profileLogoutEvents: {
            events: {click: (e: Event) => {
                e.preventDefault();
                container.innerHTML = '';
                logOff();
                location.reload();
                console.log('logout');
            }
        }},
        changeAvatarEvents: {
            events: {click: (e: Event) => {
                e.preventDefault();
                changeAvatarFormPage.changeVisible()
            }
        }},
        profileExitEvents: {
            events: {click: (e: Event) => {
                e.preventDefault();
                profileFormPage.changeVisible()
                mainWindow.changeVisible()
            }
        }},
        profileChangePasswordEvents: {
            events: {click: (e: Event) => {
                e.preventDefault();
                changePasswordFormPage.changeVisible()
            }
        }}
    });
    profileFormPage.hide();
    container.append(mainWindow.getContent());
    container.append(addFileFormPage.getContent());
    container.append(addFotoVideoFormPage.getContent());
    container.append(addLocationFormPage.getContent());
    container.append(addFilesPage.getContent());

    container.append(chatMenuPage.getContent());
    container.append(addUserFormPage.getContent());
    container.append(delUserFormPage.getContent());

    container.append(changePasswordFormPage.getContent());
    container.append(changeAvatarFormPage.getContent());
    container.append(profileFormPage.getContent());
};

