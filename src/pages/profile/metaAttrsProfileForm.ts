import { profile } from "../../utils/const"
import { Input } from "../../components/inputObject/input";
import { Button } from "../../components/button/button";

export const profileMetaAttrInputs = (): Input[] => {
  
  const prformemail = new Input ({
      label: "pr-form-email",
      labelVisible: "Почта",
        inputAttrs: [
          'type="text"',
          'id="pr-form-email"',
          'name="email"',
          `value="${profile.email}"`, 
        ],
        divErrorclassName: "reg-error",
        divErrorId: "pr-form-email-error",
        divErrorAttrs: ['checktype="email"']
      }); 
      
  const prformlogin = new Input ({
      label: "pr-form-login",
      labelVisible:"Логин",
      inputAttrs: [
        'type="text"',
        'id="pr-form-login"',
        'name="login"',
        `value="${profile.login}"`
      ],
      divErrorclassName: "reg-error",
      divErrorId: "pr-form-login-error",
      divErrorAttrs: ['checktype="login"']
    });
    
    const prformfirstname = new Input ({
        label: "pr-form-first-name",
        labelVisible:"Имя",
        inputAttrs: [
          'type="text"',
          'id="pr-form-first-name"',
          'name="first_name"',
          `value="${profile.first_name}"` 
        ],
        divErrorclassName: "reg-error",
        divErrorId: "pr-form-first_name-error",
        divErrorAttrs: ['checktype="first-name"']
      });

    const prformsecondname = new Input ({ 
        label: "pr-form-second_name",
        labelVisible:"Фамилия",
        inputAttrs: [
          'type="text"',
          'id="pr-form-second_name"',
          'name="second_name"',
          `value="${profile.second_name}"`
        ],
        divErrorclassName: "reg-error",
        divErrorId: "pr-form-second_name-error",
        divErrorAttrs: ['checktype="second-name"']
      });


    const prformdisplayname = new Input ({ 
        label: "pr-form-display_name",
        labelVisible:"Имя в чате",
        inputAttrs: [
            'type="text"',
            'id="pr-form-display_name"',
            'name="display_name"',
            `value="${profile.display_name}"`
        ],
        divErrorclassName: "reg-error",
        divErrorId: "pr-form-display_name-error",
        divErrorAttrs: ['checktype="display_name"']
      });

      const prformphone = new Input ({ 
        label: "pr-form-phone",
        labelVisible:"Телефон",
        inputAttrs: [
          'type="text"',
          'id="pr-form-phone"',
          'name="phone"',
          `value="${profile.phone}"`
        ],
        divErrorclassName: "reg-error",
        divErrorId: "pr-form-phone-error",
        divErrorAttrs: ['checktype="phone"']
      });

  return [prformemail, prformlogin, prformfirstname, prformfirstname, prformsecondname, prformdisplayname, prformphone]   
};



export const profileMetaAttrButtons = (): Button[] => {
  
  const profilechangedata =  new Button ({
      labelVisible: "Сохранить данные",
      buttonAttrs: [
          'class="link-button"',
          'id="profile-change-data"',
          'type="submit"'
        ]
    });

    const profilechangepassword = new Button ({
        labelVisible: "Изменить пароль",
        buttonAttrs: [
          'class="link-button"',
          'id="profile-change-password"',
          'type="button"'
        ]
    });

  const profilelogout = new Button ({
      labelVisible: "Выйти",
      buttonAttrs: [
        'class="button-button"',
        'id="profile-logout"',
        'type="button"'
      ]
  });

  const profileexit = new Button ({
    labelVisible: "Назад",
    buttonAttrs: [
      'class="profile-exit"',
      'id="profile-exit"',
      'type="button"'
    ]
});

  return [profilechangedata, profilechangepassword, profilelogout, profileexit];

}
