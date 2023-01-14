//fetch().then().catch()
import { chats } from "../../utils/const.js";
<<<<<<< HEAD
import { createNodeObjects } from "../../utils/createNodeObject";
=======
import { quickSortChatItems } from "../../utils/quicksort.js";
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3

export function getChatItems() {
    
    chats.sort((prev, next) => { return -1 * (new Date(prev.last_message.time) - new Date(next.last_message.time))});
<<<<<<< HEAD
    let parentdiv = createNodeObjects("div", ["manage-chat-user"], {id: "chat-sidebar-items"})
    parentdiv.innerHTML =
    chats.map(
        (elem) => (
            `
            <div class="chat-item" id="chat-item-${elem.id}" >
=======
    let parentdiv = document.createElement("div")
    parentdiv.classList.add("chat-sidebar-items");       
    parentdiv.setAttribute("id", "chat-sidebar-items");
    
    chats.forEach(
        (elem) => {
            let div = document.createElement('div')
            div.classList.add('chat-item');       
            div.setAttribute("id", `chat-item-${elem.id}`);
            div.innerHTML = `
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
                <div class="chat-avatar" id="chat-avatar-${elem.id}">
                    <img src="#" alt="Avatar" />
                </div>
                <div class="chat-name" id="chat-name-${elem.id}">${elem.title}</div>
                <div class="chat-last-message-time" id="chat-last-message-time-${elem.id}">${elem.last_message.time.slice(11, 16)}</div>
            
                <div class="chat-last-message" id="chat-last-message-${elem.id}">${elem.last_message.content}</div>
<<<<<<< HEAD
                ${elem.unread_count !== 0 ? `<div class="circle chat-unread-message-count" id="chat-unread-message-count-${elem.id}">${elem.unread_count}</div>` : "" }
            </div>  
            `
            
    )).join('');
    
    return parentdiv;
};

=======
                ${elem.unread_count !== 0 ? 
                    `<div class="circle chat-unread-message-count" id="chat-unread-message-count-${elem.id}">${elem.unread_count}</div>` : "" }
             `;
            parentdiv.appendChild(div);
    });
    
    return parentdiv;
};
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
