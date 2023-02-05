import { Component } from "../components/components";
import { getChatItem } from "../../utils/chatItems";
import { message, Message } from "../message/message";

type chatItem = {
    elem: {
        id: string,
        title: string,
        last_message: Date,
        content: string,
        uread_count: number
    }
}


function genChatItem (chatItem: chatItem): HTMLElement { 
	const result: HTMLElement = getChatItem(chatItem)
	return result
};

  

export class ChatItem extends Component {
    private messageId: string;
    private chatId: string;
    private senderId: string;
    private senderName: string;
    private sendMessageDate: Date;
    private textContent: string;
    private directToMe: boolean;
    private mediaContent: string;
    private messages_list: Message[];

    constructor(chatItem: ChatItem) {
		
        const elem: HTMLElement = genChatItem(chatItem);
		super(elem);
            this.messageId = chatItem.messageId;
            this.chatId = chatItem.chatId;
            this.senderId = chatItem.senderId;
            this.senderName = chatItem.senderName;
            this.sendMessageDate = chatItem.sendMessageDate;
            this.textContent = chatItem.textContent;
            this.directToMe = chatItem.directToMe;
            this.mediaContent = chatItem.mediaContent;
            this.addMessages = this.addMessages.bind(this);
            this.messages_list = [];
       
		this.regActionsForEventBus([
			Component.EVENTS.click
		]) 
        // addMessages(message: Message[]): void {
        //     this.messages_list = [...this.messages, ...message];
        // }

        // renderMessages(message: Message , onlyNew: Boolean = true): void {
           
        // }

	}

}

