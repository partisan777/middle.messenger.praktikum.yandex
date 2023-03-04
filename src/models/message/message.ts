import { Component } from "../components/components";
import messageTemplate from "./message_tmpl.hbs";    
import { dateFormat } from "../../utils/dateFormat";

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


export class Message extends Component {
	constructor(props: messageDataProps) {
		super('div', props, "message-wrap");
        this.props.sendMessageDate = dateFormat(new Date(this.props.sendMessageDate));
    }

    render() {
        return this.compile(messageTemplate, this.props);
	}
};



