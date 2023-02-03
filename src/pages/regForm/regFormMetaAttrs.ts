import { Form } from "../../components/form/form";


export let regForm: Object = new Form ({
        parentDivClasses: ["registration_form"],
        parentDivId: "reg-form",
        formAction: '',
        formClasses: ["reg-form"],
        formId: "reg-form",
        childDivId: "reg-form-child",
        childDivClasses: ["form-input"],
        formLabel: "Регистрация"
    });


export let loginForm: Object = new Form ({
        parentDivClasses: ["registration_form"],
        parentDivId: "login-form",
        formAction: '',
        formClasses: ["reg-form"],
        formId: "form-login",
        childDivId: "log-form-child",
        childDivClasses: ["form-input"],
        formLabel: "Вход"
    });
