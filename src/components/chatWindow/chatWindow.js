<<<<<<< HEAD
import { createNodeObjects } from "../../utils/createNodeObject";

export function getChatWindow() {
    

    let div = createNodeObjects("div", ["chat-window"], {id: "chat-window"})
=======


export function getChatWindow() {
    
    let div = document.createElement('div')
    div.classList.add('chat-window')
    div.setAttribute("id", "chat-window");
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
    div.innerHTML = `
        <div class="chat-sidebar" id="chat-sidebar">
            <div class="chat-sidebar-header" id="chat-sidebar-header">
                <button class="link-button" type="button" id="button-profile">
                    Профиль
                </button>
                <div class="triangle"></div>
            </div>
            <div class="search" id="search">
                <input type="search"></input>
                <button class="button-button" type="button" id="profile-search-button">
                    Поиск
                </button>
            </div>
        </div>
        <div class="dialog-window" id ="dialog-window">
            <div class="dialog-header" id="dialog-header">
                <div class="chat-header-descr" id="chat-header-descr">
                    <p>Название чата</p>
                </div>
                <div class="chat-menu" id="chat-menu">
                        <div class="mini-circle"></div>
                        <div class="mini-circle"></div>
                        <div class="mini-circle"></div>
                </div>      
            </div>
            <div class="dialog" id="dialog">
                Диалог
<<<<<<< HEAD
                <ul> 
                    <li><a href="./error.html">Ссылка на страницу с ошибками</a></li>
                    <li><a href="./notfound.html">Ссылка на несуществующую страницу</a></li>
                </ul>
=======
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
            </div>
            <div class="dialog-footer" id="dialog-footer">
                <div class="chat-input-area" id="chat-input-area">
                    <button class="circle" id="add-button">
                        +
                    </button>
                    <input type="text" placeholder="Введите текст сообщения" class="chat-text-input" id="chat-text-input"></input>
                    <button class="button-button" id="send-button">
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    `;

    return div;
<<<<<<< HEAD
};



=======
};
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
