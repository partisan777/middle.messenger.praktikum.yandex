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
      },
      { 
        label: "first_name",
        labelVisible:"Имя",
        inputAttrs: [
            'type="text"',
            'name="first_name"',
            'id="first_name"',
            'placeholder="Введите имя"',
            'autocomplete="on"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "reg-error-name"
      },
      { 
        label: "second_name",
        labelVisible:"Фамилия",
        inputAttrs: [
            'type="text"',
            'name="second_name"',
            'id="second_name"',
            'placeholder="Введите фамилию"',
            'autocomplete="on"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "reg-error-lastname"
      },
      { 
        
        label: "display_name",
        labelVisible:"Отображаемое имя",
        inputAttrs: [
            'type="text"',
            'name="display_name"',
            'id="display_name"',
            'placeholder="Отображаемое имя"',
            'autocomplete="on"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "reg-error-displayname"
      },
      { 
        label: "phone",
        labelVisible:"Телефон",
        inputAttrs: [
            'type="tel"',
            'name="phone"',
            'id="phone"',
            'placeholder="Введите номер телефона"',
            'autocomplete="on"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "reg-error-phone"
      },
      { 
        label: "password",
        labelVisible:"Пароль",
        inputAttrs: [
            'type="password"',
            'name="password"',
            'id="password"',
            'placeholder="Введите пароль"',
            'autocomplete="on"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "reg-error-password"
      },
      { 
        label: "password-confirm",
        labelVisible:"Повторите пароль",
        inputAttrs: [
            'type="password"',
            'name="password-confirm"',
            'id="password-confirm"',
            'placeholder="Введите повтор пароля"',
            'autocomplete="on"',
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "reg-error-password-confirm"
      }   
];



export const metaAttrButtons = [
    {   labelVisible: "Зарегистрироваться",
        buttonAttrs: [
            'class="button-button";',
            'type="button"',
            'id="registration-button"'
        ]
    },
    {
        labelVisible: "Вход",
        buttonAttrs: [
            'class="link-button";',
            'type="button"',
            'id="login-button"'
        ]
    }

]
