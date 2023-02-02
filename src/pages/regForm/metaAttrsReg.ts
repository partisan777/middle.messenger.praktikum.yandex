import { Button } from "../../components/button/button";
import { Input } from "../../components/inputObject/input";



export const metaAttrInputsReg = (): Input[] => {
    const email = new Input ({
      label: "email",
      labelVisible: "Почта",
        inputAttrs: [
            'type="text"',
            'name="email"',
            'id="email"',
            'placeholder="Введите адрес электронной почты"',
            'autocomplete="on"',
            'checktype="email"'
        ],
        divErrorclassName: "reg-error",
        divErrorId: "reg-error-email",
        divErrorAttrs: ['checktype="email"']
         
      });

      const login = new Input ({ 
        label: "login",
        labelVisible: "Логин",
        inputAttrs: [
          'type="text"',
          'name="login"',
          'id="reg_login"',
          'placeholder="Введите логин"',
          'autocomplete="on"',
          'checktype="login"'
        ],
        divErrorclassName: "reg-error",
        divErrorId: "reg-error-login",
        divErrorAttrs: ['checktype="login"']
      });
      
      const first_name = new Input ({ 
        label: "first_name",
        labelVisible: "Имя",
        inputAttrs: [
            'type="text"',
            'name="first_name"',
            'id="first_name"',
            'placeholder="Введите имя"',
            'autocomplete="on"',
            'checktype="first_name"'
        ],
        divErrorclassName: "reg-error",
        divErrorId: "reg-error-name",
        divErrorAttrs: ['checktype="first_name"']
      });

      
      const second_name = new Input ({ 
        label: "second_name",
        labelVisible: "Фамилия",
        inputAttrs: [
            'type="text"',
            'name="second_name"',
            'id="second_name"',
            'placeholder="Введите фамилию"',
            'autocomplete="on"',
            'checktype="second_name"'
        ],
        divErrorclassName: "reg-error",
        divErrorId: "reg-error-lastname",
        divErrorAttrs: ['checktype="second_name"']
      })
        
      const display_name = new Input ({
        label: "display_name",
        labelVisible: "Отображаемое имя",
        inputAttrs: [
            'type="text"',
            'name="display_name"',
            'id="display_name"',
            'placeholder="Отображаемое имя"',
            'autocomplete="on"',
            'checktype="display_name"'
        ], 
        divErrorclassName: "reg-error",
        divErrorId: "reg-error-displayname",
        divErrorAttrs: ['checktype="display_name"']
      });
      
      const phone = new Input ({ 
        label: "phone",
        labelVisible: "Телефон",
        inputAttrs: [
            'type="tel"',
            'name="phone"',
            'id="phone"',
            'placeholder="Введите номер телефона"',
            'autocomplete="on"',
            'checktype="phone"'
        ],
        divErrorclassName: "reg-error",
        divErrorId: "reg-error-phone",
        divErrorAttrs: ['checktype="phone"']
      });
     
      const password = new Input ({ 
        label: "password",
        labelVisible: "Пароль",
        inputAttrs: [
            'type="password"',
            'name="password"',
            'id="password"',
            'placeholder="Введите пароль"',
            'autocomplete="on"',
            'checktype="password"'
        ],
        divErrorclassName: "reg-error",
        divErrorId: "reg-error-password",
        divErrorAttrs: ['checktype="password"']
      });
     
      
      const password_confirm = new Input ({ 
        label: "password_confirm",
        labelVisible: "Повторите пароль",
        inputAttrs: [
            'type="password"',
            'name="password-confirm"',
            'id="password-confirm"',
            'placeholder="Введите повтор пароля"',
            'autocomplete="on"',
            'checktype="password_confirm"'
        ],
        divErrorclassName: "reg-error",
        divErrorId: "reg-error-password-confirm",
        divErrorAttrs: ['checktype="password_confirm"']
      }); 
  return [ email, login, first_name, second_name, display_name,  phone, password, password_confirm ]
};



export const metaAttrButtonsReg = (): Button[] => {
  
  const registrationbutton = new Button ( {
        labelVisible: "Зарегистрироваться",
        buttonAttrs: [
            'class="button-button"',
            'type="submit"',
            'id="registration-button"'
        ]
      });

   const reghasaccbutton = new Button ({
        labelVisible: "Ecть аккаунт?",
        buttonAttrs: [
            'class="link-button"',
            'type="submit"',
            'id="reg-has-acc-button"'
        ]
      })
    return [registrationbutton, reghasaccbutton]
  };


