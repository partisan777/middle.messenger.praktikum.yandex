import { Component } from "../../models/components/components";
import { Button } from "../../models/button/button";
import { Input } from "../../models/input/input";
import messengerHeader_tmpl from "./messengerHeader_tmpl.hbs";
import { CreateChatFormPage } from "../createChat/createChat";
import { Link } from "../../models/link/link";


interface MessengerHeaderProps {
	pageTitle?: string;
	eventsAddFileButton?: object;
	eventsChatMenuButton?: object;
	eventsProfileButton?: object;
	com_className?: string;
    com_el_id?: string;
    com_tagName?: string;
    com_isVisible?: boolean;
  };
  

export class MessengerHeaderPage extends Component {
	constructor(props: MessengerHeaderProps) {
		if (!props.com_tagName) props.com_tagName = 'div';
		if (!props.com_isVisible) props.com_isVisible = true;
		super(props)
		
	}
	init() {
		this.children.changePasswordFormPage = new CreateChatFormPage({pageTitle: 'Создать чат'})

		
		this.children.linkToProfile = new Link({
            label: 'Профиль>',
            to: '/profile'
          });

        this.children.searchInput = new Input ({ 
			type: "search",
			name: "search",
			elem_id: "search"    
		});

		this.children.searchButton = new Button ({
			labelVisible: "Поиск",
			buttonClass: "button-button",
			type: "button",
			elem_id: "profile-search-button"
		});

		this.children.createChatButton = new Button ({
			labelVisible: 'Создать',
			buttonClass: "button-button",
			// type: "button",
			elem_id: "create-chat-button",
			events: {
			  click: (e: Event) => {
				e.preventDefault();
				this.children.changePasswordFormPage.changeVisible();
			  }}
		  });
		
	}	
	render() {
        return this.compile(messengerHeader_tmpl, {});
    }
};



