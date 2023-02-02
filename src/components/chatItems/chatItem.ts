import { Component } from "../components/components";
import { getChatItem } from "../../utils/chatItems";


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
	// public id: number;
    // public title: string;
    // public avatar: string;
    // public unread_count: number;
    // public last_message: object;
    // public messages: [string];


    constructor(chatItem: Object) {
		
        const elem: HTMLElement = genChatItem(chatItem);
		super(elem);
        // this.id = chatItem.id;
        // this.title = chatItem.title;
        // this.avatar = chatItem.avatar;
        // this.unread_count = chatItem.unread_count;
        // this.last_message = chatItem.last_message;
        // this.messages;
		this.regActionsForEventBus([
			Component.EVENTS.click
		]);
        // protected override this.orderChatList()
        //     return chats.sort((prev, next) => { return -1 * (new Date(prev.last_message.time) - new Date(next.last_message.time))});
        // protected override this.updateChatItem(chatItem): void {
		//    return;
	}

}

