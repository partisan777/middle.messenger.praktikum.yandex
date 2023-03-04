import { Component } from "../../models/components/components";
import { Button } from "../../models/button/button";
import { Input } from "../../models/input/input";
import mainWindowTemplate from './mainWindow_tpls.hbs';
import { ChatItem } from "../../models/chatItems/chatItem";
import { chats } from "../../utils/const";
import { Message } from "../../models/message/message";
import { messages } from "../../utils/const";



interface MainWindowProps {
	pageTitle?: string;
	eventsAddFileButton?: object;
	eventsChatMenuButton?: object;
	eventsProfileButton?: object;
  };
  

export class MainWindow extends Component {
	protected chatList: ChatItem[];
	constructor(props: MainWindowProps) {
		super('div', props, 'chat-window', 'chat-window', true)
		
	}
	init() {

		this.children.addButton = new Button ({
			labelVisible: '+',
			buttonClass: "circle",
			// type: "button",
			elem_id: "add-button",
			events: this.props.eventsAddFileButton.events
		});

		this.children.searchInput = new Input ({ 
			type: "search",
			name: "search",
			elem_id: "search"    
		});

		console.log(this)
		this.children.profileButton = new Button ({
			labelVisible: "Профиль>",
			buttonClass: "link-button",
			type: "button",
			elem_id: "button-profile",
			events: this.props.eventsProfileButton.events
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
			elem_id: "chat-menu",
			events: this.props.eventsChatMenuButton.events
		});

		
		

		this.children.sendButton = new Button ({
			labelVisible: 'Отправить',
			buttonClass: "button-button",
			type: "button",
			elem_id: "send-button"
		});

		this.children.chatList = [];
		
		for (const i in chats) {
            this.children.chatList.push(new ChatItem(chats[i]));
        }

		this.children.messages = []

		for (const j in messages) {
			
            this.children.messages.push(new Message(messages[j]));
        }
	}	
	render() {
        return this.compile(mainWindowTemplate, {});
    }
};

