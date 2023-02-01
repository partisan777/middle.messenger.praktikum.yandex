import { Form } from "../../components/form/form";


export let profileForm: Object = new Form ({
        parentDivClasses: ["profile-subform"],
        parentDivId: {id: "profile-subform"},
        formAction: '',
        formClasses: ["form-input"],
        formId: "profile-form-input",
        childDivId: "reg-form-child",
        childDivClasses: ["form-input"],
        formLabel: "Данные пользователя"
    });
