import { createNodeObjects } from "../../utils/createNodeObject";

export let divMainWindow: HTMLElement = createNodeObjects("div", ["chat-window"], {id: "chat-window"})
divMainWindow.innerHTML = `
    <div class="chat-sidebar" id="chat-sidebar">
        <div class="chat-sidebar-header" id="chat-sidebar-header">
        </div>
        <div class="search" id="search">
        </div>
        <div class="manage-chat-user" id="chat-sidebar-items">
        </div>
    </div>
    <div class="dialog-window" id ="dialog-window">
        <div class="dialog-header" id="dialog-header">
            <div class="chat-header-descr" id="chat-header-descr">
                <p>Название чата</p>
            </div>
        </div>
        <div class="dialog" id="dialog">
            Диалог
            <ul> 
                <li><a href="./error.html">Ссылка на страницу с ошибками</a></li>
                <li><a href="./notfound.html">Ссылка на несуществующую страницу</a></li>
            </ul>
        </div>
        <div class="dialog-footer" id="dialog-footer">
            <form class="chat-input-form" id="chat-input-form" sendId="">
            </form>
        </div>
    </div>
`;