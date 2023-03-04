import { Component } from '../../models/components/components';
import addLocationTemplate from './addLocation_tmpl.hbs';
import { Button } from '../../models/button/button';
import { Input } from '../../models/input/input';


interface AddLocationFormPageProps {
  pageTitle: string;
};

export class AddLocationFormPage extends Component {
  constructor(props: AddLocationFormPageProps) {
    super('div', props, "modal", "change-avatar-page", false)
  };
  init() {

    this.children.location = new Input ({
      label: "location",
      type: "image",
      name: "location",
      elem_id: "add-location-input",
      divErrorClassName: "reg-error",
      divErrorId: "reg-error-location-input"
    });

    this.children.addlocation = new Button ({
      labelVisible: "Добавить",
      buttonClass:"button-button",
      type: "button",
      elem_id:"save-location-button",
      events: {}
    })
    
    this.children.closelocation = new Button ({
      labelVisible: "Закрыть",
      buttonClass: "link-button",
      type: "button",
      elem_id:"close-add-location-button",
      events: {click: () => {this.hide()} }
    });
  } 
  
  render() {
      return this.compile(addLocationTemplate, this.props);
  }
    
};

