import regPageTemplate from './regForm_tmpl.hbs';
import { Button } from '../../models/button/button';
import { Input } from '../../models/input/input';
import { Component } from '../../models/components/components';

interface RegFormPageProps {
  pageTitle: string;
};

export class RegFormPage extends Component {
  constructor(props: RegFormPageProps) {
    super('div', props, 'registration_form');
  };

  init() {
        this.children.email = new Input ({
            label: "email",
            labelVisible: "Почта",
            type: "text",
            name: "email",
            elem_id: "email",
            placeholder: "Введите адрес электронной почты",
            autocomplete:"on",
            checkType: "email",
            divErrorClassName: "reg-error",
            divErrorId: "reg-error-email",
            divErrorCheckType: "email"
        });
    
        this.children.login = new Input ({ 
            label: "login",
            labelVisible: "Логин",
            type: "text",
            name: "login",
            elem_id: "reg_login",
            placeholder: "Введите логин",
            autocomplete: "on",
            checkType: "login",
            divErrorClassName: "reg-error",
            divErrorId: "reg-error-login",
            divErrorCheckType: "login"
        });
            
        this.children.first_name = new Input ({ 
            label: "first_name",
            labelVisible: "Имя",
            type: "text",
            name: "first_name",
            elem_id: "first_name",
            placeholder: "Введите имя",
            autocomplete: "on",
            checkType: "first_name",
            divErrorClassName: "reg-error",
            divErrorId: "reg-error-name",
            divErrorCheckType: "first_name"
        });
            
        this.children.second_name = new Input ({ 
            label: "second_name",
            labelVisible: "Фамилия",
            type: "text",
            name: "second_name",
            elem_id: "second_name",
            placeholder: "Введите фамилию",
            autocomplete: "on",
            checkType: "second_name",
            divErrorClassName: "reg-error",
            divErrorId: "reg-error-lastname",
            divErrorCheckType: "second_name"
        });

        this.children.display_name = new Input ({
            label: "display_name",
            labelVisible: "Отображаемое имя",
            type: "text",
            name: "display_name",
            elem_id: "display_name",
            placeholder: "Отображаемое имя",
            autocomplete: "on",
            checkType: "display_name",
            divErrorClassName: "reg-error",
            divErrorId: "reg-error-displayname",
            divErrorCheckType: "display_name"
        });
        
        this.children.phone = new Input ({ 
            label: "phone",
            labelVisible: "Телефон",
            type: "tel",
            name: "phone",
            elem_id: "phone",
            placeholder: "Введите номер телефона", 
            autocomplete: "on",
            checkType: "phone",
            divErrorClassName: "reg-error",
            divErrorId: "reg-error-phone",
            divErrorCheckType: "phone"
        });
            
        this.children.password = new Input ({ 
            label: "password",
            labelVisible: "Пароль",
            type: "password",
            name: "password",
            elem_id: "password",
            placeholder: "Введите пароль",
            autocomplete: "on",
            checkType: "password",
            divErrorClassName: "reg-error",
            divErrorId: "reg-error-password",
            divErrorCheckType: "password"
        }); 
            
        this.children.password_confirm = new Input ({ 
            label: "password_confirm",
            labelVisible: "Повторите пароль",
            type: "password",
            name: "password-confirm",
            elem_id: "password-confirm",
            placeholder: "Введите повтор пароля",
            autocomplete: "on",
            checkType: "password_confirm",
            divErrorClassName: "reg-error",
            divErrorId: "reg-error-password-confirm",
            divErrorCheckType: "password_confirm"
        });

        this.children.registrationButton = new Button ( {
            labelVisible: "Зарегистрироваться",
            buttonClass: "button-button",
            type: "submit",
            elem_id: "registration-button"
        });
        
        this.children.regHasAccButton = new Button ({
            labelVisible: "Ecть аккаунт?",
            buttonClass: "link-button",
            type: "submit",
            elem_id: "reg-has-acc-button"
        }); 

    }
    render() {
        return this.compile(regPageTemplate, {pageTitle: 'Регистрация'});
    }
    
};


