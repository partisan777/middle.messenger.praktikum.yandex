import { Component } from "../components/components";
import { createFormInput } from "../../utils/createFormInput"
import {createMessageDiv} from "../../utils/createMessageDiv"
import { messageDataType } from "../../utils/createMessageDiv";
    

type messageDataType = {
    messageId?: string;
    chatId?: string;
    senderId?: string;
    senderName?: string;
    sendMessageDate?: Date;
    textContent?: string;
    directToMe?: boolean;
    mediaContent?: string[];
}
// new Date(data.sendMessageDate).toLocaleTimeString() + " " + new Date(data.sendMessageDate).toLocaleDateString()
export class Message extends Component {
	private messageId?: string;
    private chatId?: string;
    private senderId?: string;
    private senderName?: string;
    private sendMessageDate?: Date;
    private textContent?: string;
    private directToMe?: boolean;
    private mediaContent?: string[];

	constructor(data: messageDataType) {
		super();
		this.messageId = data.messageId;
		this.chatId = data.chatId;
		this.senderId = data.senderId;
		this.senderName = data.senderName;
		this.sendMessageDate = data.sendMessageDate;
		this.textContent = data.textContent;
		this.directToMe = data.directToMe;
		this.mediaContent = data.mediaContent;
		this.regActionsForEventBus([
			Component.EVENTS.focusInput
		]);
		
}


};

