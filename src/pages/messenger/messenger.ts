import { Component } from '../../models/components/components';
import messenger_tmpl from './messenger_tmpl.hbs';
import { Message } from '../../models/message/message';
import { Input } from '../../models/Input/input';
import { Button } from '../../models/button/button';
import MessagesController, { Message as MessageInfo } from '../../controllers/MessagesController';
import { withStore } from '../../models/components/store';
import { AddFileFormPage } from '../addFilesPages/addFile';
import { AddFotoVideoFormPage } from '../addFilesPages/addFotoVideo';
import { AddLocationFormPage } from '../addFilesPages/addLocation'; 
import { AddFilesPage } from '../addFilesMenu/addFilesMenu';
import { AddUserFormPage } from '../chatMenuPages/addUserPage';
import { DelUserFormPage } from '../chatMenuPages/delUserPage';
import { ChatMenuPage } from '../chatMenu/chatMenu';
// import { ChatsList } from '../../models/chatList/chatList';
import  ChatsController  from "../../controllers/chatController"
import store from '../../models/components/store';


interface MessengerProps {
  selectedChat: number | undefined;
  messages: MessageInfo[];
  userId: number;
  com_className?: string;
  com_el_id?: string;
  com_tagName?: string;
  com_isVisible?: boolean;
  directToMe?: boolean;
}

export class MessengerBase extends Component {
  constructor(props: MessengerProps) {
    if (!props.com_tagName) props.com_tagName = 'div';
    if (!props.com_className) props.com_className = "dialog-window";
    if (!props.com_el_id) props.com_el_id = "dialog-window";
    if (!props.messages) props.messages = [];
    super(props);
  }
  protected init() {
    console.log(store);
    // this.children.messages = this.createMessages(this.props);
    // this.children.chatsList = new ChatsList({isLoaded: false });
    // console.log(this.children.chatsList);

    this.children.addFileFormPage = new AddFileFormPage({pageTitle: 'Добавить файл'})
    this.children.addFotoVideoFormPage = new AddFotoVideoFormPage({pageTitle: 'Добавить медиа'})
    this.children.addLocationFormPage = new AddLocationFormPage({pageTitle: 'Добавить местоположение'})
    this.children.addFilesPage = new AddFilesPage({pageTitle: 'Add',
        com_isVisible: false,
        addFotoVideoEvents:  {events: {
            click: (e: Event) => {
                this.children.addFotoVideoFormPage.changeVisible()
                this.children.addFilesPage.changeVisible()
                e.preventDefault();
            }
        }},
        addFileEvents:  {events: {
            click: (e: Event) => {
                e.preventDefault();
                this.children.addLocationFormPage.changeVisible()
                this.children.addFilesPage.changeVisible()
            }
        }
        },       
        addLocationEvents:  {events: {
            click: (e: Event) => {
                e.preventDefault();
                this.children.addLocationFormPage.changeVisible()
                this.children.addFilesPage.changeVisible()
            }
        }}
      });
        
      this.children.addUserFormPage = new AddUserFormPage({pageTitle: 'Добаить пользователя'});
      this.children.delUserFormPage = new DelUserFormPage({pageTitle: 'Удалить пользователя'});
      this.children.chatMenuPage = new ChatMenuPage({
          pageTitle: 'Меня чата',
          addUserFormPageEvents:  {events: {
            click: (e: Event) => {
                e.preventDefault();
                this.children.chatMenuPage.changeVisible();
                this.children.addUserFormPage.changeVisible();
          }}},
          delUserFormPageEvents:  {events: {
              click: (e: Event) => {
                  e.preventDefault();
                  this.children.chatMenuPage.changeVisible()
                  this.children.delUserFormPage.changeVisible()
              }
          }}
        }); 

      this.children.chatMenuButton = new Button ({
        labelVisible: '<div class="mini-circle"></div><div class="mini-circle"></div><div class="mini-circle"></div>',
        buttonClass: "chat-menu",
        elem_id: "chat-menu",
        events: {
          click: (e: Event) => {
            e.preventDefault();
            this.children.chatMenuPage.changeVisible();
          }}
      })

      this.children.addButton = new Button ({
        labelVisible: '+',
        buttonClass: "circle",
        // type: "button",
        elem_id: "add-button",
        events: {
          click: (e: Event) => {
            e.preventDefault();
            this.children.addFilesPage.changeVisible();
          }}
      })
      
      this.children.messageInput = new Input ({ 
        label: "",
        labelVisible: "",
        name: "message",
        type: "text",
        placeholder: "Введите текст сообщения",
        class: "chat-text-input",
        elem_id: "chat-text-input",
        divErrorClassName: "",
        divErrorId: ""
      })
      
      this.children.sendButton = new Button ({
        labelVisible: 'Отправить',
        buttonClass: "button-button",
        type: "button",
        elem_id: "send-button",
        events: {
          click: () => {
            const input = this.children.messageInput as Input;
            const message = input.getValue();
            input.setValue('');
            console.log(MessagesController);
            console.log(ChatsController);
            console.log(this.children.chatsList);
          }
        }
      });

      ChatsController.fetchChats().finally(() => {
        (this.children.chatsList as Component).setProps({
          isLoaded: true          
        })
        
      });
      
  }
  protected componentDidUpdate(oldProps: MessengerProps, newProps: MessengerProps): boolean {
    this.children.messages = this.createMessages(newProps);

    return true;
  }

  private createMessages(props: MessengerProps) {
    return props.messages.map(data => {
      return new Message({...data, directToMe: props.userId === data.user_id });
    })
  }
  
  protected render(): DocumentFragment {
    return this.compile(messenger_tmpl, this.props);
    } 
  }

const withSelectedChatMessages = withStore(state => {
  const selectedChatId = state.selectedChat;

  if (!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user.id
  };
});

export const Messenger = withSelectedChatMessages(MessengerBase);



