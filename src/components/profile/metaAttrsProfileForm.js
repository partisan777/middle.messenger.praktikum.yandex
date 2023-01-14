export const metaAttrInputs = [

  { label: "pr-form-email",
      labelVisible: "Почта",
        inputAttrs: [
          'type="text"',
          'id="pr-form-email"',
          'name="email"',
          'value=`${profile.email}`', 
        ],
        divErrorclassName: "reg-error",
        divErrorId: "pr-form-email-error"
         
      },
      { 
        label: "login",
        labelVisible:"Логин",
        inputAttrs: [
          'type="text"',
          'id="pr-form-login"',
          'name="login"',
          'value="${profile.login}"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "pr-form-login-error"
      },
      { 
        label: "pr-form-first-name",
        labelVisible:"Имя",
        inputAttrs: [
          'type="text"',
          'id="pr-form-first-name"',
          'name="first_name"',
          'value=${profile.first_name}' 
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "pr-form-first_name-error"
      },
      { 
        label: "pr-form-second_name",
        labelVisible:"Фамилия",
        inputAttrs: [
          'type="text"',
          'id="pr-form-second_name"',
          'name="second_name"',
          'value="${profile.second_name}"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "pr-form-second_name-error"
      },
      { 
        label: "pr-form-display_name",
        labelVisible:"Имя в чате",
        inputAttrs: [
            'type="text"',
            'id="pr-form-display_name"',
            'name="display_name"',
            'value="${profile.display_name}"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "pr-form-display_name-error"
      },
      { 
        label: "pr-form-phone",
        labelVisible:"Телефон",
        inputAttrs: [
          'type="text"',
          'id="pr-form-phone"',
          'name="phone"',
          'value="${profile.phone}"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "pr-form-phone-error"
      }
];



export const metaAttrButtons = [
    {   labelVisible: "Сохранить данные",
        buttonAttrs: [
          'class="link-button"',
          'id="profile-change-data"',
          'type="button"'
        ]
    },
    {
        labelVisible: "Изменить пароль",
        buttonAttrs: [
          'class="link-button"',
          'id="profile-change-password"',
          'type="button"'
        ]
    },
    {
      labelVisible: "Выйти",
      buttonAttrs: [
        'class="button-button"',
        'id="profile-logout"',
        'type="button"'
      ]
  }

]
