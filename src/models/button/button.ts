import { Component } from "../components/components";
import buttonTemplate from "./button_tmpl.hbs";

interface buttonDataProps  {
	labelVisible?: string,
	actionFunction?: Function,
	buttonClass?: string,
    type?: string,
    elem_id?: string
	
};    

export class Button extends Component {
		
	constructor(props: buttonDataProps) {
		super('div', props);
	}
	render() {
		return this.compile(buttonTemplate, this.props);
	}
};

