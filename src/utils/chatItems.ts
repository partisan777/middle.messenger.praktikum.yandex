import { createNodeObjects } from "./createNodeObject";

type chatItem = {
    elem: {
        id: string,
        title: string,
        last_message: Date,
        content: string,
        uread_count: number
    }
}


export function getChatItem(elem: chatItem): HTMLElement {
    let parentdiv = createNodeObjects("div", ["chat-item"], {id: `"chat-item-${elem.id}"`})
    parentdiv.innerHTML = 
        `
            <div class="chat-avatar" id="chat-avatar-${elem.id}"> 
                <img src="#" alt="Avatar" />
            </div>
            <div class="chat-name" id="chat-name-${elem.id}">${elem.title}</div>
            <div class="chat-last-message-time" id="chat-last-message-time-${elem.id}">${elem.last_message.time.slice(11, 16)}</div>
        
            <div class="chat-last-message" id="chat-last-message-${elem.id}">${elem.last_message.content}</div>
            ${elem.unread_count !== 0 ? `<div class="circle chat-unread-message-count" id="chat-unread-message-count-${elem.id}">${elem.unread_count}</div>` : "" }
                
        `
    return parentdiv;
};







