import { ChatItem } from "../components/chatItems/chatItem";

export function generateChatItemList(chats: [object]) {
    return chats.map(item => new ChatItem(item));
};


