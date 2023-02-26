import profilePageTemplate from './profileForm_tmpl.hbs';
import { Button } from '../../models/button/button';
import { Input } from '../../models/input/input';
import { Component } from '../../models/components/components';
import { profile } from "../../utils/const"
import { ChangePasswordFormPage } from '../changePassword/changePassword';
import { ChangeAvatarFormPage } from '../changeAvatar/changeAvatar';

interface ProfileFormPageProps {
  pageTitle: string;
  profile: object;
};

export class ProfileFormPage extends Component {
  constructor(props: ProfileFormPageProps) {
    super('div', props, 'profile-main', 'profile-main');
  };
  init() {
    this.children.prformemail = new Input ({
        label: "pr-form-email",
        labelVisible: "Почта",
        type: "text",
        elem_id: "pr-form-email",
        name: "email",
        value: profile.email, 
        divErrorClassName: "reg-error",
        divErrorId: "pr-form-email-error",
        divErrorCheckType: "email"
    }); 
        
    this.children.prformlogin = new Input ({
        label: "pr-form-login",
        labelVisible:"Логин",
        type: "text",
        elem_id: "pr-form-login",
        name: "login",
        value: profile.login,
        divErrorClassName: "reg-error",
        divErrorId: "pr-form-login-error",
        divErrorCheckType: "login"
      });
      
    this.children.prformfirstname = new Input ({
        label: "pr-form-first-name",
        labelVisible:"Имя",
        type: "text",
        elem_id: "pr-form-first-name",
        name: "first_name",
        value: profile.first_name,
        divErrorClassName: "reg-error",
        divErrorId: "pr-form-first_name-error",
        divErrorCheckType: "first-name"
    });
  
    this.children.prformsecondname = new Input ({ 
        label: "pr-form-second_name",
        labelVisible:"Фамилия",
        type: "text",
        elem_id: "pr-form-second_name",
        name: "second_name",
        value: profile.second_name,
        divErrorClassName: "reg-error",
        divErrorId: "pr-form-second_name-error",
        divErrorCheckType: "second-name"
    });
  

    this.children.prformdisplayname = new Input ({ 
        label: "pr-form-display_name",
        labelVisible:"Имя в чате",
        type: "text",
        elem_id: "pr-form-display_name",
        name: "display_name",
        value: profile.display_name,
        divErrorClassName: "reg-error",
        divErrorId: "pr-form-display_name-error",
        divErrorCheckType: "display_name"
    });


    this.children.prformphone = new Input ({ 
        label: "pr-form-phone",
        labelVisible:"Телефон",
        type: "text",
        elem_id: "pr-form-phone",
        name: "phone",
        value: profile.phone,
        divErrorClassName: "reg-error",
        divErrorId: "pr-form-phone-error",
        divErrorCheckType: "phone"
    });
    
    this.children.profilechangedata =  new Button ({
        labelVisible: "Сохранить данные",
        buttonClass: "link-button",
        elem_id:"profile-change-data",
        type: "submit"
    });
  
    this.children.profilechangepassword = new Button ({
        labelVisible: "Изменить пароль",
        buttonClass: "link-button",
        elem_id:"profile-change-password",
        type: "button"
    });
  
    this.children.profilelogout = new Button ({
        labelVisible: "Выйти",
        buttonClass: "button-button",
        elem_id:"profile-logout",
        type: "button"
        
    });

    this.children.changeavatar = new Button ({
        labelVisible: "Изменить изображение",
        buttonClass: "link-button",
        elem_id:"change-avatar-button",
        type: "button"
    });
  
    this.children.profileexit = new Button ({
        labelVisible: "Назад",
        buttonClass: "profile-exit",
        elem_id:"profile-exit",
        type: "button"
    });

    this.children.changepasswordformpage = new ChangePasswordFormPage ({pageTitle: "Смена пароля"});
    this.children.changeavatarformpage = new ChangeAvatarFormPage ({pageTitle: "Смена аватар"});
    }
    render() {
        return this.compile(profilePageTemplate, this.props);
    }
    
};

