import { Component } from '../../models/components/components';
import messenger_tmpl from './messenger_tmpl.hbs';
import { Message } from '../../models/message/message';
import { Input } from '../../models/input/input';
import { Button } from '../../models/button/button';
import MessagesController, { Message as MessageInfo } from '../../controllers/messagesController';
import { withStore } from '../../models/components/store';
import { AddFileFormPage } from '../addFilesPages/addFile';
import { AddFotoVideoFormPage } from '../addFilesPages/addFotoVideo';
import { AddLocationFormPage } from '../addFilesPages/addLocation'; 
import { AddFilesPage } from '../addFilesMenu/addFilesMenu';
import { AddUserFormPage } from '../chatMenuPages/addUserPage';
import { DelUserFormPage } from '../chatMenuPages/delUserPage';
import { ChatMenuPage } from '../chatMenu/chatMenu';



interface MessengerProps {
  selectedChat: number | undefined;
  messages_attr: MessageInfo[];
  userId: number;
  com_className?: string;
  com_el_id?: string;
  com_tagName?: string;
  com_isVisible?: boolean;
  selectedChatId?: number;
  chatTitle: string | undefined;
}

export class MessengerBase extends Component {
  constructor(props: MessengerProps) {
    if (!props.com_tagName) props.com_tagName = 'div';
    if (!props.com_className) props.com_className = "dialog-window";
    if (!props.com_el_id) props.com_el_id = "dialog-window";
    if (!props.messages_attr) props.messages_attr = [];
    super(props);
  }
  protected init() {
    this.children.addFileFormPage_attr = new AddFileFormPage({pageTitle: 'Добавить файл'})
    this.children.addFotoVideoFormPage_attr = new AddFotoVideoFormPage({pageTitle: 'Добавить медиа'})
    this.children.addLocationFormPage_attr = new AddLocationFormPage({pageTitle: 'Добавить местоположение'})
    this.children.addFilesPage_attr = new AddFilesPage({pageTitle: 'Add',
        com_isVisible: false,
        addFotoVideoEvents:  {events: {
            click: (e: Event) => {
                this.children.addFotoVideoFormPage_attr.changeVisible()
                this.children.addFilesPage_attr.changeVisible()
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
                this.children.addLocationFormPage_attr.changeVisible()
                this.children.addFilesPage_attr.changeVisible()
            }
        }}
      });
        
      this.children.addUserFormPage_attr = new AddUserFormPage({pageTitle: 'Добаить пользователя'});
      this.children.delUserFormPage_attr = new DelUserFormPage({pageTitle: 'Удалить пользователя'});
      this.children.chatMenuPage_attr = new ChatMenuPage({
          pageTitle: 'Меня чата',
          addUserFormPageEvents:  {events: {
            click: (e: Event) => {
                e.preventDefault();
                this.children.chatMenuPage_attr.changeVisible();
                this.children.addUserFormPage_attr.changeVisible();
          }}},
          delUserFormPageEvents:  {events: {
              click: (e: Event) => {
                  e.preventDefault();
                  this.children.chatMenuPage_attr.changeVisible()
                  this.children.delUserFormPage_attr.changeVisible()
              }
          }}
        }); 

      this.children.chatMenuButton_attr = new Button ({
        labelVisible: '<div class="mini-circle"></div><div class="mini-circle"></div><div class="mini-circle"></div>',
        buttonClass: "chat-menu",
        elem_id: "chat-menu",
        events: {
          click: (e: Event) => {
            e.preventDefault();
            this.children.chatMenuPage_attr.changeVisible();
          }}
      })

      this.children.addButton_attr = new Button ({
        labelVisible: '+',
        buttonClass: "circle",
        // type: "button",
        elem_id: "add-button",
        events: {
          click: (e: Event) => {
            e.preventDefault();
            this.children.addFilesPage_attr.changeVisible();
          }}
      })
      
      this.children.messageInput_attr = new Input ({ 
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
      
      this.children.sendButton_attr = new Button ({
        labelVisible: 'Отправить',
        buttonClass: "button-button",
        type: "button",
        elem_id: "send-button",
        events: {
          click: () => {
            const input = this.children.messageInput_attr as Input;
            const message = input.getValue();
            if (message !== '') {
              MessagesController.sendMessage(this.props.selectedChat!, message);
              input.setValue('');
            }
          }
        }
      });
  }

  protected componentDidUpdate(oldProps: MessengerProps, newProps: MessengerProps): boolean {
    this.children.messages_attr = this.createMessages(newProps);
    //store.set('selectedChatId', this.props.selectedChat)
    return true;
  }

  private createMessages(props: MessengerProps) {
    return props.messages_attr.map(data => {
      return new Message({...data, isMine: props.userId === data.user_id });
    })
  }
  
  protected render(): DocumentFragment {
    // console.log(store);
    return this.compile(messenger_tmpl, this.props);
    } 
  }

const withSelectedChatMessages = withStore(state => {
  const selectedChatId = state.selectedChat;
  if (!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id,
      chatTitle: undefined
    };
  }
  return {
    messages_attr: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user.id,
    chatTitle: state.chats.filter((item => item.id === state.selectedChat))[0].title
  };
});

export const Messenger = withSelectedChatMessages(MessengerBase);



