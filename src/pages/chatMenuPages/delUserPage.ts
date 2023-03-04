import { Component } from '../../models/components/components';
import delUserPageTemplate from './delUserPage_tmpl.hbs';
import { Button } from '../../models/button/button';
import { Input } from '../../models/input/input';


interface DelUserFormPageProps {
  pageTitle: string;
};

export class DelUserFormPage extends Component {
  constructor(props: DelUserFormPageProps) {
    super('div', props, "modal", "del-user-page", false)
    
  };
  init() {

    this.children.deluser = new Input ({
      label: "user",
      type: "image",
      name: "user",
      elem_id: "del-user-input",
      divErrorClassName: "reg-error",
      divErrorId: "reg-error-del-user-input"
    });

    this.children.deluserbutton = new Button ({
      labelVisible: "Удалить",
      buttonClass:"button-button",
      type: "button",
      elem_id:"del-user-button"
    })
    
    this.children.closedeluser = new Button ({
      labelVisible: "Закрыть",
      buttonClass: "link-button",
      type: "button",
      elem_id: "close-del-user-button",
      events: {click: () => {this.hide()} }
    });    
  } 
  
  render() {
      return this.compile(delUserPageTemplate, this.props);
  }
    
};

