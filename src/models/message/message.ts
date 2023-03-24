import { Component } from "../components/components";
import messageTemplate_tmpl from "./message_tmpl.hbs";    
import { dateFormat } from "../../utils/dateFormat";
import { Message as MessageInfo } from "../../controllers/MessagesController";


export class Message extends Component {
	constructor(props: MessageInfo) {
        if (!props.com_tagName) props.com_tagName = 'div';
        if (!props.com_className) props.com_className = "message-wrap";
		super(props);
        this.props.sendMessageDate = dateFormat(new Date(this.props.sendMessageDate));
    }

    render() {
        return this.compile(messageTemplate_tmpl, this.props);
	}
};



