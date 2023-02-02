import { Component } from "../components/components";


export class AddMenu extends Component {
	constructor(menu: HTMLElement) {
		const elem: HTMLElement = menu;
		super(elem);
		this.regActionsForEventBus([
			Component.EVENTS.buttonClick
		]);
	}
};

