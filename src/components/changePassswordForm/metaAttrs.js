export const metaAttrInputs = [
    { label: "password",
      labelVisible: "Текущий пароль",
        inputAttrs: [
            'type="password"',
            'name="oldPassword"',
            'id="password"',
            'autocomplete="on"',
            'required placeholder="Введите пароль"'
        ],
        divErrorclassName: "reg-error",
        divErrorId: "error-current-password"
         
      },
      { 
        label: "password-confirm",
        labelVisible:"Новый пароль",
        inputAttrs: [
            'type="password"',
            'name="newPassword"',
            'id="new-password"',
            'autocomplete="on"',
            'placeholder="Введите повтор пароля"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "error-new-password"
      },
      { 
        label: "new-password-confirm",
        labelVisible:"Повторите пароль",
        inputAttrs: [
           'type="password"',
           'name="newPassword-confirm"',
           'id="new-password-confirm',
           'autocomplete="on"',
           'required placeholder="Введите повтор пароля"'
        ],
        ivErrorclassName: "reg-error",
        divErrorId: "error-new-password-confirm"
      }
  ];

export const metaAttrButtons = [
    {   labelVisible: "Сменить пароль",
        buttonAttrs: [
            'class="button-button"',
            'type="button"',
            'id="registration-button"'
        ]
    },
    {
        labelVisible: "Закрыть",
        buttonAttrs: [
            'class="link-button"',
            'type="button"',
            'id="close-change-password-form-button"'
        ]
    }

]

       