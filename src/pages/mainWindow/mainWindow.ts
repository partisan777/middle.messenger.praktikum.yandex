import { Component } from "../../models/components/components";
import { Button } from "../../models/button/button";
import { Input } from "../../models/input/input";
import mainWindowTemplate from './mainWindow_tpls.hbs';
import { ChatList } from "../../models/chatlist/chatList";
import { ChatItem } from "../../models/chatItems/chatItem";
import { chats } from "../../utils/const";


export class MainWindow extends Component {
	protected chatList: ChatItem[];
	constructor(props: {}) {
		super('div', props, 'chat-window', 'chat-window')
		
	}
	init() {
		
		this.children.searchInput = new Input ({ 
			type: "search",
			name: "search",
			elem_id: "search"    
		});

		this.children.profileButton = new Button ({
			labelVisible: "Профиль>",
			buttonClass: "link-button",
			type: "button",
			elem_id: "button-profile"
		});

		this.children.searchButton = new Button ({
			labelVisible: "Поиск",
			buttonClass: "button-button",
			type: "button",
			elem_id: "profile-search-button"
		});
		
		
		this.children.messageInput = new Input ({ 
			label: "",
			labelVisible: "",
			name: "message",
			type: "text",
			placeholder: "Введите текст сообщения",
			class: "chat-text-input",
			elem_id: "chat-text-input",
			divErrorClassName: "",
			divErrorId: ""
		});

		this.children.chatMenuButton = new Button ({
			labelVisible: '<div class="mini-circle"></div><div class="mini-circle"></div><div class="mini-circle"></div>',
			buttonClass: "chat-menu",
			elem_id: "chat-menu"
		});

		this.children.addButton = new Button ({
			labelVisible: '+',
			buttonClass: "circle",
			elem_id: "add-button"
		});

		this.children.sendButton = new Button ({
			labelVisible: 'Отправить',
			buttonClass: "button-button",
			elem_id: "send-button"
		});

		this.children.chatList = [];
		
		for (const i in chats) {
            this.children.chatList.push(new ChatItem(chats[i]));
        }
		
	}
	render() {
        return this.compile(mainWindowTemplate, {});
    }
}


