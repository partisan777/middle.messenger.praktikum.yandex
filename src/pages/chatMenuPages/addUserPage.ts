import { Component } from '../../models/components/components';
import addUserPageTemplate from './addUserPage_tmpl.hbs';
import { Button } from '../../models/button/button';
import { Input } from '../../models/input/input';


interface AddUserFormPageProps {
  pageTitle: string;
};

export class AddUserFormPage extends Component {
  constructor(props: AddUserFormPageProps) {
    super('div', props, "modal", "add-user-page")
  };
  init() {

    this.children.adduser = new Input ({
      label: "user",
      type: "image",
      name: "user",
      elem_id: "add-user-input",
      divErrorClassName: "reg-error",
      divErrorId: "reg-error-add-user-input"
    });

    this.children.adduserbutton = new Button ({
      labelVisible: "Добавить",
      buttonClass:"button-button",
      type: "button",
      elem_id:"add-user-button"
    })
    
    this.children.closeadduser = new Button ({
      labelVisible: "Закрыть",
      buttonClass: "link-button",
      type: "button",
      elem_id: "close-add-user-button",
      events: {click: () => {this.hide()} }
    });
  } 
  
  render() {
      return this.compile(addUserPageTemplate, this.props);
  }
    
};

