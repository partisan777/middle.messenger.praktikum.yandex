import { Component } from "../components/components";
import { createFormInput } from "../../utils/createFormInput"


type inputData = {
    label?: string,
    labelVisible?: string,
    inputAttrs?: string[],
    divErrorclassName?: string,
    divErrorId?: string,
	divErrorAttrs: string[]
}    

export const input = (data: inputData): HTMLElement => {
	const {label, labelVisible, inputAttrs, divErrorclassName, divErrorId, divErrorAttrs} = data;
	return createFormInput(label, labelVisible, inputAttrs, divErrorclassName, divErrorId, divErrorAttrs);	
};

export class Input extends Component {
	constructor(inputData: inputData) {
		const elem: HTMLElement = input(inputData);
		super(elem);
		
		this.regActionsForEventBus([
			Component.EVENTS.focusInput
		]);
		this.regActionsForEventBusInput([
			 Component.EVENTS.blurInput
		]);
		}
}




