import { Component } from "../../components/components/components";
import { appendChildElements } from "../../utils/appendChild";
import { divMainWindow } from "../../utils/mainWindow_tmpls";
import { metaAttrButtonsMainWindow, metaAttrInputsMainWindow } from "./mainWindowMetaAttrs";
import { chats } from "../../utils/const";
import { generateChatItemList } from "../../utils/generateChatList";
import { openProfilePage } from "../profile/profile";
import { Button } from "../../components/button/button";
import { Input } from "../../components/inputObject/input";
import { ChatItem } from "../../components/chatItems/chatItem";
import { getModalWindow } from "../../components/modalWindow/modalWindow";
import { AddMenu } from "../../components/addMenu/addMenu";
import { getAddMenuButtons, getAddFilesMenu } from "../addMenu/addMenuAddFiles";
import { getChatMenuButtons, getChatMenu } from "../addMenu/addChatMenu";
// import {  }

// import { hideElement, showElement } from "../../utils/functions";




export default class MainWindowView {
    private container: HTMLElement;
    private mainWinButtons: Button[];
    private mainWininputs: Input[];
    private chatItems: ChatItem[];
    private chatMenuButtons: Button[];
    private chatAddMenuButtons: Button[];
    private addMenuChatMenu: AddMenu;
    private addMenuAddchat: AddMenu;
    
    constructor (idRootElement: string = "root") {
        this.container = document.getElementById(idRootElement);
        this.mainWinButtons= [...metaAttrButtonsMainWindow()];
        this.mainWininputs = [...metaAttrInputsMainWindow()];
        this.chatItems = [...generateChatItemList(chats)];
        this.chatMenuButtons = getChatMenuButtons();
        this.chatAddMenuButtons = getAddMenuButtons();
        this.addMenuChatMenu = new AddMenu(getChatMenu());
        this.addMenuAddchat = new AddMenu(getAddFilesMenu());
        this.mainWindowHTML = divMainWindow;
        this.addControls = this.addControls.bind(this);
    }

    addControls(): void {
        //Добавляем кнопку профиль
        appendChildElements("chat-sidebar-header", [this.mainWinButtons[0].document()]);
        //добаляем инпут и кнопку поиска
        appendChildElements("search", [this.mainWininputs[0].document(), this.mainWinButtons[1].document()]);
        //Добаляем кнопки и инпут отправки сообщений
        appendChildElements("chat-input-form", [this.mainWinButtons[3].document(), this.mainWininputs[1].document(), this.mainWinButtons[4].document()]);
        //добавляем Кнопку меню чата
        appendChildElements("chat-header-descr", [this.mainWinButtons[2].document()]);
        //Добавляем список чатов
        appendChildElements("chat-sidebar-items", generateChatItemList(chats).map(item => item.document()));
        appendChildElements("root", [getModalWindow()]);
        //добавляем меню чата
        appendChildElements("dialog-footer", [this.addMenuChatMenu.document()]);
        appendChildElements("li_add-user", [this.chatMenuButtons[0].document()]);
        appendChildElements("li_delete-user", [chatMenuButtons[1].document()]);
        appendChildElements("root", [this.addMenuAddchat.document()]);
        //доабавляем меню добавления объектов в чат
        appendChildElements("li_add-foto-video", [this.chatAddMenuButtons[0].document()]);
        appendChildElements("li_add-file", [this.chatAddMenuButtons[1].document()]);
        appendChildElements("li_add-location", [this.chatAddMenuButtons[2].document()]);
        this.mainWinButtons[0].eventBus.on(Component.EVENTS.buttonClick, openProfilePage);
        //добавляем событие для открытия меню чата
        this.mainWinButtons[2].eventBus.on(Component.EVENTS.buttonClick, openChatMenu);
        this.addMenuChatMenu.eventBus.on(Component.EVENTS.mouseleave,  closeMenu);
        //добавляем открытие меню добавления объектов в чат
        this.mainWinButtons[3].eventBus.on(Component.EVENTS.buttonClick, openAddMenu);
        this.mainWinButtons[0].eventBus.on(Component.EVENTS.buttonClick, openProfilePage);
        
    }   
    hide() {

    }
    show() {

    }
    
    
    render() {
        this.container.appendChild(divMainWindow)
        this.addControls();
    }


};


