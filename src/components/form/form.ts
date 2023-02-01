import { Component } from "../components/components";

import { createForm } from "../../utils/createForm"


type formData = {
	parentDivClasses?: [string],
	parentDivId?: Object,
	formAction?: string,
	formClasses?: [string],
	formId?: string,
	childDivId?: string,
	childDivClasses?: [string],
	formLabel?: string,
	subElems?: [Object]
}    

const form = (data: formData): HTMLElement => {
	const {parentDivClasses, parentDivId, formAction, formClasses, formId, childDivId, childDivClasses, formLabel} = data
	return createForm(parentDivClasses, parentDivId, formAction, formClasses, formId, childDivId, childDivClasses, formLabel)
};

export class Form extends Component {
	
	public subElements: [Object];
	
	constructor(formData: formData) {
		const elem: HTMLElement = form(formData);
		super(elem);
		this.regActionsForEventBus([
			Component.EVENTS.submit
		])
		this.subElements = [Object];
	}
	protected addSubelements = (subElems: [Object]): void => {
		for (let i: number = 0; i < subElems.length; i++) {
			this.subElements.push(subElems[i])
		}

	}
}


