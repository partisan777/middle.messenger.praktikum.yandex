const checkPatternData: Object = {
    email: {regexp: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu, error_message: 'Укажите верный e-mail'},
    login: {regexp: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{3,25}$/iu, error_message: 'Укажите верный логин'},
    first_name: {regexp: /^[A-ZА-Я]{1}[a-zа-я]{0,254}$$/iu, error_message: 'Укажите верное имя'},
    second_name: {regexp: /^[A-ZА-Я]{1}[a-zа-я\-]{0,254}$/iu, error_message: 'Укажит верную фамилию'},
    display_name: {regexp: '', error_message: 'Укажите верное отображаемое имя'},
    phone:  {regexp: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, error_message: 'Укажите верный номер телефона'},
    password: {regexp: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}$/g, error_message: 'Пароль не соответствует правилу'},
    password_confirm: {regexp: '', error_message: 'Пароли не совпадают'}
};


const checkValueInput = (input: object): void => {
    const value: string = input.value;
    const checktype: string = input.getAttribute("checktype");
    const error_message: string = checkPatternData[checktype].error_message;
    let regexp: string = checkPatternData[checktype].regexp;
    let countErrors : number = 0;
    console.log(checktype, value);
    if (!regexp.test(value)) {
        input.nextSibling.parentNode.childNodes[4].innerHTML = error_message;
        countErrors = countErrors + 1
    } else {
        input.nextSibling.parentNode.childNodes[4].innerHTML = ''
    }
    if (countErrors != 0) {
        throw new Error('Заполните правильно поля');
    }
};    


export const submitRegForm = (): void => {
    const list_objects: object[] = event.target.form.querySelectorAll("input")
    for (let i: number = 0; i < list_objects.length; i++) {
        checkValueInput(list_objects[i])
    }
};


export const checkInput = (): void => {
    console.log(event.srcElement);
    checkValueInput(event.srcElement);
    
};

