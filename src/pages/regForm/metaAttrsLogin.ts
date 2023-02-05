import { Button } from "../../components/button/button";
import { Input } from "../../components/inputObject/input";
import { Component } from "../../components/components/components";
import { switchRegLogForm } from "../../utils/actions";

export const metaAttrInputsLog = (): Input[] => {
      const login = new Input ({ 
        label: "login",
        labelVisible: "Логин",
        inputAttrs: [
          'type="text"',
          'name="login-log"',
          'id="login"',
          'placeholder="Введите логин"',
          'autocomplete="on"',
          'checktype="login"'
        ],
        divErrorclassName: "reg-error",
        divErrorId: "log-error-login",
        divErrorAttrs: ['checktype="login"']
      });
      const password = new Input ({ 
        label: "password",
        labelVisible: "Пароль",
        inputAttrs: [
            'type="password"',
            'name="password"',
            'id="password-log"',
            'placeholder="Введите пароль"',
            'autocomplete="on"',
            'checktype="password"'
        ],
        divErrorclassName: "reg-error",
        divErrorId: "log-error-password",
        divErrorAttrs: ['checktype="password"']
      });

  return [ login, password ]
};

export const metaAttrButtonsLog = (): Button[] => {
  
  const loginbutton = new Button ({
        labelVisible: "Вход",
        buttonAttrs: [
            'class="button-button"',
            'type="submit"',
            'id="login-button"'
        ]
      });

   const loghasaccbutton = new Button ({
        labelVisible: "Нет аккаунта?",
        buttonAttrs: [
            'class="link-button"',
            'type="submit"',
            'id="log-has-acc-button"'
        ]
      })
      loghasaccbutton.eventBus.on(Component.EVENTS.buttonClick,  switchRegLogForm) 
    return [loginbutton, loghasaccbutton]
  };


