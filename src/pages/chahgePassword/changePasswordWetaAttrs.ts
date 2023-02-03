import {Button} from "../../components/button/button";
import { Input } from "../../components/inputObject/input";
import { Form } from "../../components/form/form";


export const metaAttrInputsChangePassword = (): Input[] => {

  const oldpassword: Input = new Input ({
     label: "oldpassword",
      labelVisible: "Текущий пароль",
      inputAttrs: [
        'type="password"',
        'name="oldPassword"',
        'id="old-password"',
        'autocomplete="on"',
        'required placeholder="Введите пароль"',
        'checktype="oldpassword"'
      ],
      divErrorclassName: "reg-error",
      divErrorId: "error-current-password",
      divErrorAttrs: ['checktype="oldpassword"']
  }); 

  const newpassword: Input = new Input ({
    label: "newpassword",
      labelVisible: "Новый пароль",
      inputAttrs: [
        'type="password"',
        'name="oldPassword"',
        'id="new-password"',
        'autocomplete="on"',
        'required placeholder="Введите пароль"',
        'checktype="newpassword"'
    ],
    divErrorclassName: "reg-error",
    divErrorId: "error-current-password",
    divErrorAttrs: ['checktype="newpassword"']
    }); 

  const newpasswordconfirm: Input = new Input ({
    label: "new-password-confirm",
    labelVisible:"Повторите пароль",
    inputAttrs: [
      'type="password"',
      'name="newPassword-confirm"',
      'id="new-password-confirm',
      'autocomplete="on"',
      'required placeholder="Введите повтор пароля"',
      'checktype="newconfirmpassword"'
    ],
    divErrorclassName: "reg-error",
    divErrorId: "error-new-password-confirm",
    divErrorAttrs: ['checktype="newconfirmpassword"']
  });

return [oldpassword, newpassword, newpasswordconfirm];

};

export const metaAttrButtonsChangePassword = (): Button[] => {

 const changePassword =  new Button ({
       labelVisible: "Сменить пароль",
        buttonAttrs: [
            'class="button-button"',
            'type="button"',
            'id="registration-button"'
        ]
    }); 
  const closeChangePassword  =  new Button ({
        labelVisible: "Закрыть",
        buttonAttrs: [
            'class="link-button"',
            'type="button"',
            'id="close-change-password-form-button"'
        ]
    });
return [changePassword, closeChangePassword];
};



export const changepassForm: Object = new Form ({
  parentDivClasses: ["registration_form"],
  parentDivId: "change-pass-form",
  formAction: '',
  formClasses: ["reg-form"],
  formId: "form-change-pass",
  childDivId: "chan-pass-form-child",
  childDivClasses: ["form-input"],
  formLabel: "Сменить пароль"
});       