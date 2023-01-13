//fetch().then().catch()
import { chats } from "../../utils/const.js";
import { quickSortChatItems } from "../../utils/quicksort.js";

export function getChatItems() {
    
    chats.sort((prev, next) => { return -1 * (new Date(prev.last_message.time) - new Date(next.last_message.time))});
    let parentdiv = document.createElement("div")
    parentdiv.classList.add("chat-sidebar-items");       
    parentdiv.setAttribute("id", "chat-sidebar-items");
    
    chats.forEach(
        (elem) => {
            let div = document.createElement('div')
            div.classList.add('chat-item');       
            div.setAttribute("id", `chat-item-${elem.id}`);
            div.innerHTML = `
                <div class="chat-avatar" id="chat-avatar-${elem.id}">
                    <img src="#" alt="Avatar" />
                </div>
                <div class="chat-name" id="chat-name-${elem.id}">${elem.title}</div>
                <div class="chat-last-message-time" id="chat-last-message-time-${elem.id}">${elem.last_message.time.slice(11, 16)}</div>
            
                <div class="chat-last-message" id="chat-last-message-${elem.id}">${elem.last_message.content}</div>
                ${elem.unread_count !== 0 ? 
                    `<div class="circle chat-unread-message-count" id="chat-unread-message-count-${elem.id}">${elem.unread_count}</div>` : "" }
             `;
            parentdiv.appendChild(div);
    });
    
    return parentdiv;
};