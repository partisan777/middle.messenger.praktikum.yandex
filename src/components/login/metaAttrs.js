export const metaAttrInputs = [
    { label: "email",
      labelVisible: "Почта",
        inputAttrs: [
            'type="text"',
            'name="email"',
            'id="email"',
            'placeholder="Введите адрес электронной почты"',
            'autocomplete="on"'
        ],
        divErrorclassName: "reg-error",
        divErrorId: "reg-error-email"
         
      },
      { 
        label: "login",
        labelVisible:"Логин",
        inputAttrs: [
          'type="text"',
          'name="login"',
          'id="login"',
          'placeholder="Введите логин"',
          'autocomplete="on"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "reg-error-login"
      }
  ];

export const metaAttrButtons = [
    {   labelVisible: "Вход",
        buttonAttrs: [
            'class="button-button"',
            'type="button"',
            'id="login-button"'
        ]
    },
    {
        labelVisible: "Нет аккаунта?",
        buttonAttrs: [
            'class="link-button"',
            'type="button"',
            'id="registration-button"'
        ]
    }

]

