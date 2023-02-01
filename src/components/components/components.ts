import {EventBus} from "./eventBus";

enum EVENTS {
	windowOpen = "window:open",
    windowClose = "window:close",
	buttonClick = "click",
	click = "click",
	changeInput = "change",
    blurInput = "blur",
    focusInput = "focus",
    submitForm = "submit",
	onBlurInput = "onblur"
};

enum STATES {
    visible = "visible",
    hidden = "hidden",
}


export class Component {

	public static readonly EVENTS = EVENTS;
    public static readonly STATE = STATES;
	protected readonly _elem: HTMLElement;
	public readonly eventBus: EventBus;
	protected readonly id: string;
	private _targetElement: HTMLElement;

	constructor(document: HTMLElement, targetElementSelector: string = '') {
		this._elem = document;
        this.eventBus = new EventBus();
		this._targetElement = (targetElementSelector.length > 0)
			? this.subElement(targetElementSelector)
			: this.document();
	}

	protected regActionsForEventBus = (actions: string[]): void => {
		actions.forEach(action => {
            this.target().addEventListener(action, (e) => {
				e.preventDefault();
				this.eventBus.emit(action);
			})
		});
	}

	document = (): HTMLElement => {
		return this._elem;
	}

	target = (): HTMLElement => {
		return this._targetElement;
	}

	subElements = (selector: string): HTMLElement[] => {
		return Array.from(this._elem.querySelectorAll(selector));
	}

	subElement = (selector: string): HTMLElement => {
		const elements = this.subElements(selector);
		if (elements.length === 0) {
			throw new Error(`Элемент ${selector} не найден`);
		}
		return elements[0];
	}
}