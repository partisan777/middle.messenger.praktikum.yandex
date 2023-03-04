import { Component } from '../../models/components/components';
import addFotoVideoTemplate from './addFotoVideo_tmpl.hbs';
import { Button } from '../../models/button/button';
import { Input } from '../../models/input/input';


interface AddFotoVideoFormPageProps {
  pageTitle: string;
};

export class AddFotoVideoFormPage extends Component {
  constructor(props: AddFotoVideoFormPageProps) {
    super('div', props, "modal", "add-fotovideo-page", false)
  };
  init() {

    this.children.fotovideo = new Input ({
      label: "fotovideo",
      type: "image",
      name: "fotovideor",
      elem_id: "add-fotovideo-input",
      divErrorClassName: "reg-error",
      divErrorId: "reg-error-fotovideo-input"
    });

    this.children.addfotovideo =new Button ({
      labelVisible: "Добавить",
      buttonClass:"button-button",
      type: "button",
      elem_id:"save-fotovideo-button",
      events: {}
    })
    
    this.children.closefotovideo = new Button ({
      labelVisible: "Закрыть",
      buttonClass: "link-button",
      type: "button",
      elem_id:"close-fotovideo-button",
      events: {click: () => {this.hide()}}
    });
  } 
  
  render() {
      return this.compile(addFotoVideoTemplate, this.props);
  }
    
};

