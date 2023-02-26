import { Component } from "../components/components";
import inputTemplate from "./input_tmpl.hbs";


interface inputDataProps {
    label?: string,
    labelVisible?: string,
	type?: string,
	name?: string,
	elem_id?: string,
	placeholder?: string,
	autocomplete?: string,
	checkType?: string,
    divErrorClassName?: string,
    divErrorId?: string,
	divErrorCheckType?: string,
	eventActions?: Function,
	class?: string,
	value?: string
}    

export class Input extends Component {
	constructor(props: inputDataProps) {
		super('div', props);
		
	}
	render() {
		return this.compile(inputTemplate, this.props);
	}
}




