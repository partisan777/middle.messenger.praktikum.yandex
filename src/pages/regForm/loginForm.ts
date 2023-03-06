import loginPageTemplate from './loginForm_tmpl.hbs';
import { Button } from '../../models/button/button';
import { Input } from '../../models/input/input';
import { Component } from '../../models/components/components';


interface RegFormPageProps {
  pageTitle: string;
  logHasAccButtonEvent: object;
  loginButtonEvents: object;
};

export class LoginFormPage extends Component {
  constructor(props: RegFormPageProps) {
    super('div', props, 'registration_form');
  };

  init() {
        this.children.login = new Input ({ 
            label: "login",
            labelVisible: "Логин",
            type: "text",
            name: "login-log",
            elem_id: "login",
            placeholder: "Введите логин",
            autocomplete: "on",
            checkType: "login",
            divErrorClassName: "reg-error",
            divErrorId: "log-error-login",
            divErrorCheckType: "login"
        });

        this.children.password = new Input ({ 
            label: "password",
            labelVisible: "Пароль",
            type: "password",
            name: "password",
            elem_id: "password-log",
            placeholder: "Введите пароль",
            autocomplete: "on",
            checkType: "password",
            divErrorClassName: "reg-error",
            divErrorId: "log-error-password",
            divErrorCheckType: "password"
        });

        this.children.loginButton = new Button ({
            labelVisible: "Вход",
            buttonClass: "button-button",
            type: "submit",
            elem_id:"login-button",
            events: this.props.loginButtonEvents.events
            
        });
        
        this.children.logHasAccButton = new Button ({
            labelVisible: "Нет аккаунта?",
            buttonClass: "link-button",
            type:"submit",
            elem_id: "log-has-acc-button",
            events: this.props.logHasAccButtonEvent.events
        });
    }

    render() {
        return this.compile(loginPageTemplate, {pageTitle: 'Войти'});
    }
    
};

