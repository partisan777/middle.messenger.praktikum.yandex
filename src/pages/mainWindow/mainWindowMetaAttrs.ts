import { Button } from "../../components/button/button";
import { Input } from "../../components/inputObject/input";


export const metaAttrInputsMainWindow = (): Input[] => {
    const searchInput = new Input ({ 
      label: "",
      labelVisible: "",
      inputAttrs: [
        'type="search"',
        'name="search"',
        'id="search"'
      ],
      divErrorclassName: "",
      divErrorId: "",
      divErrorAttrs: []
    });


    const messageInput = new Input ({ 
        label: "",
        labelVisible: "",
        inputAttrs: [
            'name="message"',
            'type="text"',
            'placeholder="Введите текст сообщения"',
            'class="chat-text-input"',
            'id="chat-text-input"'
        ],
        divErrorclassName: "",
        divErrorId: "",
        divErrorAttrs: []
    });

    return [searchInput, messageInput]

}


export const metaAttrButtonsMainWindow = (): Button[] => {
  
    const profileButton = new Button ({
          labelVisible: "Профиль>",
          buttonAttrs: [
              'class="link-button"',
              'type="button"',
              'id="button-profile"'
          ]
        });
    
    const searchButton = new Button ({
        labelVisible: "Поиск",
        buttonAttrs: [
            'class="button-button"',
            'type="button"',
            'id="profile-search-button"'
        ]
        });

    const chatMenuButton = new Button ({
        labelVisible: '<div class="mini-circle"></div><div class="mini-circle"></div><div class="mini-circle"></div>',
        buttonAttrs: [
            'class="chat-menu"',
            'id="chat-menu"'
        ]
        });

    const addButton = new Button ({
        labelVisible: '+',
        buttonAttrs: [
            'class="circle"',
            'id="add-button"'
        ]
        });

    const sendButton = new Button ({
        labelVisible: 'Отправить',
        buttonAttrs: [
            'class="button-button"',
            'id="send-button"'
        ]
        });

return [profileButton, searchButton, chatMenuButton, addButton, sendButton]
}  


     

