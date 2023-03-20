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
    com_className?: string;
    com_el_id?: string;
    com_tagName?: string;
    com_isVisible?: boolean;
}


export class Message extends Component {
	constructor(props: messageDataProps) {
        if (!props.com_tagName) props.com_tagName = 'div';
        if (!props.com_className) props.com_className = "message-wrap";
		super(props);
        this.props.sendMessageDate = dateFormat(new Date(this.props.sendMessageDate));
    }

    render() {
        return this.compile(messageTemplate, this.props);
	}
};



