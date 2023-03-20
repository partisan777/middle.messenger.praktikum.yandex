import { Component } from '../../models/components/components';
import changeAvatarTemplate from './changeAvatar_tmpl.hbs';
import { Button } from '../../models/button/button';
import { Input } from '../../models/input/input';


interface ChangeAvatarFormPageProps {
  pageTitle?: string;
  com_className?: string;
  com_el_id?: string;
  com_tagName?: string;
	com_isVisible?: boolean;
};

export class ChangeAvatarFormPage extends Component {
  constructor(props: ChangeAvatarFormPageProps) {
    if (!props.com_tagName) props.com_tagName = 'div';
    if (!props.com_className) props.com_className =  "modal";
    if (!props.com_el_id) props.com_el_id = "change-avatar-page";
    if (!props.com_isVisible) props.com_isVisible = false;
    super(props)
  };
  init() {

    this.children.avatar = new Input ({
      label: "avatar",
      type: "image",
      name: "avatar",
      elem_id: "add-avatar-input",
      divErrorClassName: "reg-error",
      divErrorId: "reg-error-avatar-input"
    });

    this.children.addAvatar = new Button ({
      labelVisible: "Добавить",
      buttonClass:"button-button",
      type: "button",
      elem_id:"save-avatar-button"
    })
    
    this.children.closeAvatarForm = new Button ({
      labelVisible: "Закрыть",
      buttonClass: "link-button",
      type: "button",
      elem_id: "close-add-avatar-button",
      events: {
          click: (e: Event) => { 
            this.hide()
            e.preventDefault()
    }}
    });
  } 
  
  render() {
      return this.compile(changeAvatarTemplate, this.props);
  }
    
};

