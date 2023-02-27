import { Component } from "../../models/components/components";
import { Button } from "../../models/button/button";
import ChatMenuPageTemplate from "./chatMenuPage_tmpl.hbs"





interface chatMenuPageProps{
	pagetitle: string;
}

export class ChatMenuPage extends Component {
	constructor(props: chatMenuPageProps) {
		super('div', props, 'chat-menu-list', 'chat-menu-list')
	}
	init() {
		
		this.children.adduser = new Button({
			labelVisible: "Добавить пользователя",
			buttonClass: "link-button",
			elem_id: "add-user"
		});
	
		this.children.deluser = new Button({
			labelVisible: "Удалить пользователя",
			buttonClass: "link-button",
			elem_id: "delete-user"
		});
		
	}
	render() {
        return this.compile(ChatMenuPageTemplate, this.props);
    }
}


