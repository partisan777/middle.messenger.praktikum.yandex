import { Component } from "../components/components";
import { messageDataType } from "../../utils/createMessageDiv";
import messageTemplate from "./message_tmpl.hbs"    

interface messageDataProps {
    messageId?: string;
    chatId?: string;
    senderId?: string;
    senderName?: string;
    sendMessageDate?: Date;
    textContent?: string;
    directToMe?: boolean;
    mediaContent?: string[];
    events?: {};
}

// new Date(data.sendMessageDate).toLocaleTimeString() + " " + new Date(data.sendMessageDate).toLocaleDateString()

export class Message extends Component {
	constructor(props: messageDataProps) {
		super('div', props, "message-wrap");
    }
    
	render() {
		return this.compile(messageTemplate, this.props);
	}
};



