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

    let div = document.createElement('div');
    div.classList.add("chat-menu-list");
    div.setAttribute("id", "chat-menu-list");
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
        // console.log(div);
    return div;
}