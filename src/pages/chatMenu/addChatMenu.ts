import { createNodeObjects } from "../../utils/createNodeObject";
import { Button } from "../../components/button/button";
import { appendChildElements } from "../../utils/appendChild";


export const getChatMenuButtons = (): Button[] => {
	const addUserButton: Button = new Button({
    	labelVisible: "Добавить пользователя",
        buttonAttrs: [
            'class="link-button"',
            'id="add-user"'
        ]
	});

	const delUserButton: Button = new Button({
		labelVisible: "Удалить пользователя",
		buttonAttrs: [
            'class="link-button"',
            'id="delete-user"'
        ]
	});
    return [addUserButton, delUserButton]
};


export const getChatMenu = (): HTMLElement => {
    
    let div = createNodeObjects("div", ["chat-menu-list"], {id: "chat-menu-list"});    
    div.style.display = 'none';
    div.innerHTML = 
        `<nav>
            <ul>
                <li id="li_add-user">
                    <img class="chat-menu-icon" alt="Add" src="img/add.svg"></img>
                </li>
                <li id="li_delete-user">
                    <img class="chat-menu-icon" alt="Del" src="img/delete.svg"></img>
                </li>
            </ul>
        </nav>`;
        

    return div;
};







