import { Component } from "../../components/components/components";
import { appendChildElements } from "../../utils/appendChild";
import { divMainWindow } from "./tmpls";
import { metaAttrButtonsMainWindow, metaAttrInputsMainWindow } from "./mainWindowMetaAttrs";
import { chats } from "../../utils/const";
import { generateChatItemList } from "../../utils/generateChatList";
import { openProfilePage } from "../profile/profile";
import { Button } from "../../components/button/button";
import { Input } from "../../components/inputObject/input";
import { ChatItem } from "../../components/chatItems/chatItem";


export function addMainWindow (idRootElement: string = "root"): void {
    let mainWindowHTML: HTMLlement = divMainWindow;
    appendChildElements(idRootElement, [mainWindowHTML]);
    const mainWinButtons: Button[] = [...metaAttrButtonsMainWindow()];
    const mainWininputs: Input[] = [...metaAttrInputsMainWindow()];
    let chatItems: ChatItem[] = [...generateChatItemList(chats)];

    // const openProfilePage (): void {

    // };

    //Добавляем кнопку профиль
    appendChildElements("chat-sidebar-header", [mainWinButtons[0]._elem]);
    //добаляем инпут и кнопку поиска
    appendChildElements("search", [mainWininputs[0]._elem, mainWinButtons[1]._elem]);
    //Добаляем кнопки и инпут отправки сообщений
    appendChildElements("chat-input-form", [mainWinButtons[3]._elem, mainWininputs[1]._elem, mainWinButtons[4]._elem]);
    //добавляем Кнопку меню чата
    appendChildElements("chat-header-descr", [mainWinButtons[2]._elem]);
    //Добавляем список чатов
    appendChildElements("chat-sidebar-items", generateChatItemList(chats).map(item => item._elem));
    
    mainWinButtons[0].eventBus.on(Component.EVENTS.buttonClick, openProfilePage);
    
};
