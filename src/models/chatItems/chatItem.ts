import { Component } from "../components/components";
import { Message } from "../message/message";
import chatItemTemplate from "./chatItem_tmpl.hbs";
import { dateFormat } from "../../utils/dateFormat"

 interface chatItemProps {
    id: number;
    title?: string;
    unread_count?: number;
    last_message: 
    {
      user: {
        first_name: string;
        second_name: string;
        avatar: string;
        email: string;
        login: string;
        phone: string;
      }
    
    time: Date | string;
    content: string;
    };
	  events?: {}
};

  

export class ChatItem extends Component {
    private id: number;
    private title: string;
    private unread_count: number;
    private first_name: string;
    private second_name: string;
    private avatar: string;
    private email: string;
    private login: string;
    private phone: string;
    private time: Date | string;
    private content: string;
    public messageList: Message[];
    
    
    constructor(props: chatItemProps) {
      
      super('div', props, "chat-item", `chat-item-${props.id}`);
      this.messageList = [];
    }
    

  
  render() {
    this.props.last_message.time = dateFormat(new Date(this.props.last_message.time));
    return this.compile(chatItemTemplate, this.props);
	}

};

