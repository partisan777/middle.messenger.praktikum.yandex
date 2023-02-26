import {EventBus} from "./eventBus";
import { nanoid } from "nanoid";

enum EVENTS {
	INIT = "init",
    FLOW_CDM = "flow:component-did-mount",
    FLOW_CDU = "flow:component-did-update",
    FLOW_RENDER = "flow:render",
	windowOpen = "window:open",
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


export class Component<P extends Record<string, any> = any> {

	public static readonly EVENTS = EVENTS;
  public static readonly STATE = STATES;
	public id = nanoid(6);
	protected props: P;
	public children: Record<string, Component>;
	private eventBus: () => EventBus;
	private _element: HTMLElement | null = null;
	private _meta: { tagName: string; props: P; className: string, el_id: string};
  private _el: HTMLElement | null = null;
  
  // /** JSDoc
  //  * @param {string} tagName
  //  * @param {Object} props
  //  *
  //  * @returns {void}
  //  */

  constructor(tagName = "div", propsWithChildren: P, className = '', el_id = '' ) {
    const eventBus = new EventBus();
`   `
    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this._meta = {
		  tagName,
    	props: props as P,
      className,
      el_id
    };

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Component.EVENTS.INIT);
   
  }

  _getChildrenAndProps(childrenAndProps: P): { props: P, children: Record<string, Component>} {
    const props: Record<string, unknown> = {};
    const children: Record<string, Component> = {};
	
    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Component) {
        children[key as string] = value;
      } else {
        props[key] = value;
      }
    });

    return { props: props as P, children };
  }

  _addEvents() {
    const {events = {}} = this.props as P & { events: Record<string, () => void> };

    Object.keys(events).forEach(eventName => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Component.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName, className, el_id } = this._meta;
    this._element = this._createDocumentElement(tagName, className, el_id);
  }

  private _init() {
    this._createResources();
    this.init();
    this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
  }

  protected init() {}
  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Component.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach(child => child.dispatchComponentDidMount());
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(oldProps: P, newProps: P) {
    return true;
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const fragment = this.render();
    this._element!.innerHTML = '';
    this._element!.append(fragment);
    this._addEvents();
  }


  protected compile(template: (context: any) => string, context: any) {
    const contextAndStubs = {...context};

    Object.entries(this.children).forEach(([name, component]) => {
      if (Array.isArray(component)) {
        contextAndStubs[name] = component.map(item => `<div data-id="${item.id}"></div>`)
      } else {
        contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
      }
    });

    const html = template(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    const replaceStub = (component: Component) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

      if (!stub) {
        return;
      }
      component.getContent()?.append(...Array.from(stub.childNodes));
      stub.replaceWith(component.getContent()!);
    }

    Object.entries(this.children).forEach(([_, component]) => {
      if (Array.isArray(component)) {
        component.forEach(replaceStub);
      } else {
        replaceStub(component);
      }
    });
    return temp.content;
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: P) {
    
	return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        const oldTarget = { ...target }

        target[prop as keyof P] = value;

        
        this.eventBus().emit(Component.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      }
    });
  }

  _createDocumentElement(tagName: string, className: string, el_id: string) {
    this._el = document.createElement(tagName); 
    if (className != '') {
      this._el.className = className
    }
    if (el_id != '') {
      this._el.setAttribute('id', el_id);
    }
    
    return this._el
  }

  show() {
    this.getContent()!.style.display = "flex";
  }

  hide() {
    this.getContent()!.style.display = "none";
  }


  protected regActionsForEventBusInput = (actions: string[]): void => {
	actions.forEach(action => {
		if (this._element.className === 'div_input') { 
			this._element.getElementsByTagName('input')[0]?.addEventListener(action, (e) => {
			e.preventDefault();
			this.eventBus.emit(action);
			})
		}	
   })
	}
	getDeepestLastElement = ( el: HTMLElement = this._element, selector: string = 'div' ): HTMLElement => {
		return Array.from(el.querySelectorAll(selector)).pop() || el;
	};
	
	
}


