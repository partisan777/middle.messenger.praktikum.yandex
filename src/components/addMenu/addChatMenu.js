<<<<<<< HEAD
import { createNodeObjects } from "../../utils/createNodeObject";

=======
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
export const chatMenu = [
	{
		title: "Добавить пользователя",
	    class: "chat-menu-item",
        id: "add-user",
        iconSrc: 'img/add.svg'
	},
	{
		title: "Удалить пользователя",
		class: "chat-menu-item",
        id: "delete-user",
        iconSrc: './img/delete.svg'
	}
];


export function getChatMenu() {
<<<<<<< HEAD
    
    let div = createNodeObjects("div", ["chat-menu-list"], {id: "chat-menu-list"});    
=======

    let div = document.createElement('div');
    div.classList.add("chat-menu-list");
    div.setAttribute("id", "chat-menu-list");
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
    div.innerHTML = 
        `<nav>
            <ul>
                ${chatMenu.map((item) => (
                    `<li  id="${item.id}">
                        <img class="chat-menu-icon" alt="Add" src="${item.iconSrc}"></img>
                        <button class="link-button">
                            ${item.title}
                        </button>
                    </li>`
                    )).join('')
                }
            </ul>
        </nav>`;
<<<<<<< HEAD
    return div;
}
=======
        // console.log(div);
    return div;
}
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
