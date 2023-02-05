import { Component } from "../../components/components/components";
import { appendChildElements } from "../../utils/appendChild";
import { metaAttrInputsReg, metaAttrButtonsReg } from "./metaAttrsReg";
import { metaAttrButtonsLog, metaAttrInputsLog } from "./metaAttrsLogin";
import { loginForm, regForm } from "./regFormMetaAttrs";
import { checkInput } from "../../utils/formValidate";
import { removeElement } from "../../utils/nodeObjectManipulation";

export default class addRegFormView {
    public idRootElement: string = "root";
    public models: Component[] = [];
    private container: HTMLElement;
    protected isReg: boolean;
    private regFormDoc: Component[];
    private loginFormDoc: Component[];
    private regbuttons: Component[];
    private reginputs: Component[];
    private logbuttons: Component[];
    private loginputs: Component[];
    // private checkInput: Any;

    constructor(idRootElement = "root", models=[]) {
        this.models = models;
        this.container = document.getElementById(idRootElement)
        this.isReg = false;

        this.regbuttons = [...metaAttrButtonsReg()];
        this.reginputs = [...metaAttrInputsReg()];
        this.logbuttons = [...metaAttrButtonsLog()];
        this.loginputs =  [...metaAttrInputsLog()];
        this.loginFormDoc = loginForm;
        this.regFormDoc = regForm;
        this.checkInput = checkInput;
        this.switchRegLogForm = this.switchRegLogForm.bind(this);
        this.close = this.close.bind(this);

    }
    switchRegLogForm (): void {
    
        if (this.isReg === false) {
            this.loginFormDoc.show();
            this.regFormDoc.hide();
            this.isReg = true;
        } else {
            this.loginFormDoc.hide();
            this.regFormDoc.show();
            this.isReg = false;
        }
    };

    addActions (): void {
        // this.logbuttons[0].eventBus.on(Component.EVENTS.buttonClick, this.switchRegLogForm);
        this.logbuttons[1].eventBus.on(Component.EVENTS.buttonClick, this.switchRegLogForm);
        this.regbuttons[1].eventBus.on(Component.EVENTS.buttonClick, this.switchRegLogForm);
        this.reginputs.map(item => {
            item.eventBus.on(Component.EVENTS.blurInput, this.checkInput);
            
        });
    };   
    close(): void {
        removeElement("reg-form");
        removeElement("login-form");
        console.log("удалено");
    }


    render() {
        this.switchRegLogForm ()
        this.loginFormDoc.addSubelements([...this.loginputs, ...this.logbuttons])
        this.regFormDoc.addSubelements([...this.reginputs, ...this.regbuttons])
        this.addActions()
        this.container.appendChild(this.regFormDoc.document());
        this.container.appendChild(this.loginFormDoc.document());
    };

};    