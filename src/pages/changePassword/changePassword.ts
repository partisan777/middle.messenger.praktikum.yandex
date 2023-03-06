import { Component } from '../../models/components/components';
import changePasswordTemplate from './changePassword_tmpl.hbs';
import { Button } from '../../models/button/button';
import { Input } from '../../models/input/input';


interface ChangePasswordFormPageProps {
  pageTitle: string;
};

export class ChangePasswordFormPage extends Component {
  constructor(props: ChangePasswordFormPageProps) {
    super('div', props, "modal", "change-password-page", false)
  };
  init() {

    this.children.oldpassword = new Input ({
      label: "oldpassword",
      labelVisible: "Текущий пароль",
      type: "password",
      name: "oldPassword",
      elem_id: "old-password",
      autocomplete: "on",
      placeholder: "Введите пароль",
      checkType: "oldpassword",
      divErrorClassName: "reg-error",
      divErrorId: "error-current-password",
      divErrorCheckType:  "oldpassword"
    }); 

    this.children.newpassword = new Input ({
      label: "newpassword",
      labelVisible: "Новый пароль",
      type: "password",
      name: "oldPassword",
      elem_id: "new-password",
      autocomplete: "on",
      placeholder: "Введите пароль",
      checkType: "newpassword",
      divErrorClassName: "reg-error",
      divErrorId: "error-current-password",
      divErrorCheckType: "newpassword"
    }); 

    this.children.newpasswordconfirm = new Input ({
      label: "new-password-confirm",
      labelVisible:"Повторите пароль",
      type: "password",
      name: "newPassword-confirm",
      elem_id: "new-password-confirm",
      autocomplete: "on",
      placeholder: "Введите повтор пароля",
      checkType: "newconfirmpassword",
      divErrorClassName: "reg-error",
      divErrorId: "error-new-password-confirm",
      divErrorCheckType:  "newconfirmpassword"
    });

    this.children.changePassword =  new Button ({
      labelVisible: "Сменить пароль",
      buttonClass: "button-button",
      type: "button",
      elem_id: "registration-button"
    }); 

    this.children.closeChangePassword  =  new Button ({
      labelVisible: "Закрыть",
      buttonClass: "link-button",
      type: "button",
      elem_id: "close-change-password-form-button",
      events: { click: (e: Event) => { 
          this.hide();          
      }}
    })
  }
  render() {
      return this.compile(changePasswordTemplate, this.props);
  }
};



