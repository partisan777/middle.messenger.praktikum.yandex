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

    const addFileFormPage: Component = new AddFileFormPage({pageTitle: 'Добавить файл'})
    const addFotoVideoFormPage: Component = new AddFotoVideoFormPage({pageTitle: 'Добавить медиа'})
    const addLocationFormPage: Component = new AddLocationFormPage({pageTitle: 'Добавить местоположение'})
    const addFilesPage: Component = new AddFilesPage({pageTitle: 'Add',
            addFotoVideoEvents:  {events: {
                click: (e: Event) => {
                    addFotoVideoFormPage.changeVisible()
                    addFilesPage.changeVisible()
                    e.preventDefault();
                }
            }},
            addFileEvents:  {events: {
                click: (e: Event) => {
                    e.preventDefault();
                    addLocationFormPage.changeVisible()
                    addFilesPage.changeVisible()
                }
            }
            },       
            addLocationEvents:  {events: {
                click: (e: Event) => {
                    e.preventDefault();
                    addLocationFormPage.changeVisible()
                    addFilesPage.changeVisible()
                }
            }}
        });

    const addUserFormPage = new AddUserFormPage({pageTitle: 'Добаить пользователя'});
    const delUserFormPage = new DelUserFormPage({pageTitle: 'Удалить пользователя'});
    const chatMenuPage = new ChatMenuPage({pageTitle: 'Меня чата',
        addUserFormPageEvents:  {events: {
            click: (e: Event) => {
                e.preventDefault();
                chatMenuPage.changeVisible()
                addUserFormPage.changeVisible()
                
            }}   
        },
        delUserFormPageEvents:  {events: {
            click: (e: Event) => {
                e.preventDefault();
                chatMenuPage.changeVisible()
                delUserFormPage.changeVisible()
            }
        }}
    });       

    const mainWindow = new MainWindow({
        pageTitle: 'Чат',
        eventsAddFileButton: {
            events: {click: (e: Event) => {
                e.preventDefault();
                addFilesPage.changeVisible()
            }
        }},
        eventsChatMenuButton: {
            events: {click: (e: Event) => {
                e.preventDefault();
                // console.log(e)
                chatMenuPage.changeVisible()
            }
        }},
        eventsProfileButton: {
            events: {click: (e: Event) => {
                e.preventDefault();
                // console.log(e)
                mainWindow.changeVisible()
                profileFormPage.changeVisible()
            }
        }}
    });
    
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
                // console.log(e)
                
                changePasswordFormPage.changeVisible()
            }
        }}
    });

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