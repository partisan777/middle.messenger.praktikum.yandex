import { Component } from "../components/components";
import { createButton } from "../../utils/createButton";

type buttonData = {
        labelVisible?: string,
        buttonAttrs?: string[]
}    

function button (data: buttonData): HTMLElement { 
	const { labelVisible, buttonAttrs } = data;
	const result: HTMLElement = createButton(labelVisible, buttonAttrs)
	return result
};

export class Button extends Component {
	
	constructor(buttonData: buttonData) {
		const elem: HTMLElement = button(buttonData);
		super(elem);
		this.regActionsForEventBus([
			Component.EVENTS.buttonClick
		]);
		
	}
};

