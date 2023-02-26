import { Component } from "../components/components";
import chatItemTemplate from "./chatItem_tmpl.hbs";


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
    private time: string;
    private content: string;
    
    constructor(props: chatItemProps) {
      
      super('div', props, "chat-item", `chat-item-${props.id}`);
      this.id = this.props.id;
      this.title	=	this.props.title;
      this.unread_count	=	this.props.unread_count;
      this.first_name	=	this.props.last_message.user.first_name;
      this.second_name	=	this.props.last_message.user.second_name;
      this.avatar	=	this.props.last_message.user.avatar;
      this.email =	this.props.last_message.user.email;
      this.login =	this.props.last_message.user.login;
      this.phone =	this.props.last_message.user.phone;
      this.time	=	String(this.props.last_message.time).slice(11, 16);
      this.content = this.props.last_message.content; 
      this.props.last_message.time = String(this.props.last_message.time).slice(11, 16);
    }
    
  
  render() {
    console.log(this.props)
		return this.compile(chatItemTemplate, this.props);
	}

};

