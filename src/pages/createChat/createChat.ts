import { Component } from '../../models/components/components';
import createChat_tmpl from './createChat_tmpl.hbs';
import { Button } from '../../models/button/button';
import { Input } from '../../models/input/input';
import ChatController from '../../controllers/chatController';

interface CreateChatPageProps {
  pageTitle?: string;
  com_className?: string;
  com_el_id?: string;
  com_tagName?: string;
	com_isVisible?: boolean;
};

export class CreateChatFormPage extends Component {
  constructor(props:  CreateChatPageProps) {
    if (!props.com_tagName) props.com_tagName = 'div';
    if (!props.com_className) props.com_className =  "modal";
    if (!props.com_el_id) props.com_el_id = "create-chat-page";
    if (!props.com_isVisible) props.com_isVisible = false;
    super(props)
  };
  init() {

    this.children.chatName_attr = new Input ({
      label: "new-chat-name",
      type: "text",
      name: "new-chat-name",
      elem_id: "new-chat-name-input",
      divErrorClassName: "reg-error",
      divErrorId: "reg-error-new-chat-name-input"
    });

    this.children.createChat_attr = new Button ({
      labelVisible: "Создать",
      buttonClass:"button-button",
      type: "button",
      elem_id:"save-chat-name-button",
      events: {
        click: () => {
          const input = this.children.chatName_attr as Input;
          const chatname = input.getValue();
          input.setValue('');
          ChatController.create(chatname)
          ChatController.fetchChats()
          this.hide();
        }
      }
    })
    
    this.children.closeCreateChatForm_attr = new Button ({
      labelVisible: "Закрыть",
      buttonClass: "link-button",
      type: "button",
      elem_id: "close-chat-name-button",
      events: {
          click: (e: Event) => { 
            this.hide()
            e.preventDefault()
      }}
    });
  } 
  
  render() {
      return this.compile(createChat_tmpl, this.props);
  }
    
};

