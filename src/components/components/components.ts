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
	readonly _elemStart: HTMLElement;
	protected readonly _subElements: HTMLElement[];
	public readonly eventBus: EventBus;
	protected readonly id: string;
	private _targetElement: HTMLElement;
	
	
	constructor(document: HTMLElement, targetElemSelector: string = '') {
		this._elem = document;
		this._elemStart = document;
		this._subElements;
        this.eventBus = new EventBus();
		this._targetElement = (targetElemSelector.length > 0)
			? this.subElement(targetElemSelector)
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
		const elements = this._subElements(selector);
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
	  
		Object.assign(this.Props, nextProps);
	  };
	  
	show(): void {
		this._elem.style.display = "flex";
	};
	  
	hide(): void {
		this._elem.style.display = "none";
	};
	
	_makePropsProxy(props: Any) {
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

	getDeepestLastElement = ( el: HTMLElement = this._elem, selector: string = 'div' ): HTMLElement => {
		return Array.from(el.querySelectorAll(selector)).pop() || el;
	};
	
	addSubelements = (subElem: Component[]): void => {
		this._subElements = [...subElem]
		const elemForAppend: HTMLElement = this.getDeepestLastElement(this._elem);
		this._subElements.forEach(item => {
			elemForAppend.appendChild(item._elem);
			
		})
	};
  
}






