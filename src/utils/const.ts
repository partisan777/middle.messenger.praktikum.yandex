export const chats: object[] = [
    {
      "id": 111,
      "title": "my-chat111",
      "avatar": "/111/avatar1.jpg",
      "unread_count": 15,
      "last_message": {
        "user": {
          "first_name": "Petya",
          "second_name": "Pupkin",
          "avatar": "/path/to/avatar.jpg",
          "email": "my111@email.com",
          "login": "userLogin111",
          "phone": "8(911)-222-31-11"
        },
        "time": "2020-01-02T14:22:22.000Z",
        "content": "this is message content111"
      }
    },
    {
      "id": 222,
      "title": "my-chat222",
      "avatar": "/222/avatar1.jpg",
      "unread_count": 1,
      "last_message": {
        "user": {
          "first_name": "Lesha",
          "second_name": "Fedorov",
          "avatar": "/path/to/avatar.jpg",
          "email": "my222@email.com",
          "login": "userLogin111",
          "phone": "8(911)-222-32-22"
        },
        "time": "2020-01-02T14:18:22.000Z",
        "content": "this is message content222"
      }
    },
    {
      "id": 333,
      "title": "my-chat333",
      "avatar": "/333/avatar1.jpg",
      "unread_count": 5,
      "last_message": {
        "user": {
          "first_name": "Sasha",
          "second_name": "Pupkin",
          "avatar": "/path/to/avatar.jpg",
          "email": "my333@email.com",
          "login": "userLogin333",
          "phone": "8(911)-222-33-33"
        },
        "time": "2020-01-02T11:22:22.000Z",
        "content": "this is message content333"
      }
    },
    {
      "id": 444,
      "title": "my-chat444",
      "avatar": "/444/avatar1.jpg",
      "unread_count": 0,
      "last_message": {
        "user": {
          "first_name": "Vasya",
          "second_name": "Petrov",
          "avatar": "/path/to/avatar.jpg",
          "email": "my444@email.com",
          "login": "userLogin444",
          "phone": "8(911)-222-34-44"
        },
        "time": "2020-01-02T14:22:22.000Z",
        "content": "this is message content444"
      }
    }
  ]
;


export const profile: object = {
    "id": 111,
    "first_name": "Petya",
    "second_name": "Pupkin",
    "display_name": "Petya Pupkin",
    "login": "userLogin111",
    "email": "my111@email.com",
    "phone": "89223332111",
    "avatar": "/path/to/avatar.jpg"
  };


export const messages: messageDataType[] = [
   {
    messageId: "222",
    chatId: "1111",
    senderId: "222", 
    senderName: "Я",
    sendMessageDate: "2020-01-02T14:22:23.000Z",
    textContent: "Текст полученного afeefwefwefefwfwe aefwefwef сообщения11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
    directToMe: "from"
  },
  {
    messageId: "111",
    chatId: "1111",
    senderId: "1111", 
    senderName: "Отправитель",
    sendMessageDate: "2020-01-02T14:22:22.000Z",
    textContent: "Текст отрпавленного сообщения",
    directToMe: "me"
  },

  {
    messageId: "222",
    chatId: "2222",
    senderId: "222", 
    senderName: "Я",
    sendMessageDate: "2020-01-02T14:22:23.000Z",
    textContent: "Текст полученного afeefwefwefefwfwe aefwefwef сообщения22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222",
    directToMe: "from"
  },
  {
    messageId: "111",
    chatId: "2222",
    senderId: "1111", 
    senderName: "Отправитель",
    sendMessageDate: "2020-01-02T14:22:22.000Z",
    textContent: "Текст отрпавленного сообщения",
    directToMe: "me"
  }
  

]



export const checkPatternData: object = {
  email: {regexp: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu, error_message: 'Укажите верный e-mail'},
  login: {regexp: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{3,25}$/iu, error_message: 'Укажите верный логин'},
  firstName: {regexp: /^[A-ZА-Я]{1}[a-zа-я]{0,254}$$/iu, error_message: 'Укажите верное имя'},
  secondName: {regexp: /^[A-ZА-Я]{1}[a-zа-я\-]{0,254}$/iu, error_message: 'Укажит верную фамилию'},
  displayName: {regexp: /^[A-ZА-Я]{1}[a-zа-я\-]{0,254}$/iu, error_message: 'Укажите верное отображаемое имя'},
  phone:  {regexp: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, error_message: 'Укажите верный номер телефона'},
  password: {regexp: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}$/g, error_message: 'Пароль не соответствует правилу'},
  // passwordConfirm: {regexp: '', error_message: 'Пароли не совпадают'}
};


