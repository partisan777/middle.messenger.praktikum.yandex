import {EventBus} from "./eventBus";

enum EVENTS {
	windowOpen = "window:open",
	FLOW_CDU = "flow:component-did-update",
    windowClose = "window:close",
	buttonClick = "click",
	click = "click",
	changeInput = "change",
    blurInput = "blur",
    focusInput = "focus",
    submitForm = "submit",
	onBlurInput = "onblur",
	mouseleave = "mouseleave"
};

enum STATES {
    visible = "visible",
    hidden = "hidden",
}


export class Component {

	public static readonly EVENTS = EVENTS;
    public static readonly STATE = STATES;
	readonly _elem: HTMLElement;
	protected readonly _subElements: HTMLElement;
	public readonly eventBus: EventBus;
	protected readonly id: string;
	private _targetElement: HTMLElement;
	
	constructor(document: HTMLElement, targetElementSelector: string = '') {
		this._elem = document;
		this._subElements;
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
	protected regActionsForEventBusInput = (actions: string[]): void => {
		actions.forEach(action => {
			if (this._targetElement.className === 'div_input') { 
				this._targetElement.getElementsByTagName('input')[0]?.addEventListener(action, (e) => {
				e.preventDefault();
				this.eventBus.emit(action);
				})
			}	
	   })
	}
	   
	document = (): HTMLElement => {
		return this._elem;
	}

	target = (): HTMLElement => {
		return this._targetElement;
	}

	subElement = (selector: string): HTMLElement => {
		const elements = this.subElements(selector);
		if (elements.length === 0) {
			throw new Error(`Элемент ${selector} не найден`);
		}
		return elements[0];
	}
	allSubElements = (selector: string): HTMLElement[] => {
		return Array.from(this._elem.querySelectorAll(selector));
	}

	componentDidUpdate(oldProps, newProps): boolean {
		return true;
	  }
	  
	  setProps = nextProps => {
		if (!nextProps) {
		  return;
		}
	  
		Object.assign(this.props, nextProps);
	  };
	  
	show(): void {
		this.getContent().style.display = "block";
	};
	  
	hide(): void {
		this.getContent().style.display = "none";
	};
	
	_makePropsProxy(props) {
		return new Proxy(props, {
		get(target, prop) {
			const value = target[prop];
			return typeof value === "function" ? value.bind(target) : value;
		},
		set(target, prop, value) {
			target[prop] = value;
			this.eventBus().emit(Component.EVENTS.FLOW_CDU, {...target}, target);
			return true;
		},
		deleteProperty() {
			throw new Error("Нет доступа");
		}
		});
	};

	
  
}