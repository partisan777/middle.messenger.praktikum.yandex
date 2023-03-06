import { checkPatternData } from "./const"


export const checkValueInput = (e: Event): object => {
    const name: string = e.target.name
    let currentError: string;
    let currentValue: string =  e.target?.value;
    let regexp: string = checkPatternData[name].regexp;
    if (!regexp.test(currentValue)) {
        currentError = checkPatternData[name].error_message;
    } else {
        currentError = ''
    }
    return {name, currentError, currentValue}
}


/* осталось от старой реализации, пока оставлю
export const submitRegForm = (event): void => {
    const list_objects: object[] = event.target.form.querySelectorAll("input")
    for (let i: number = 0; i < list_objects.length; i++) {
        checkValueInput(list_objects[i])
    }
};


export const checkInput = (event): void => {
    console.log(event.srcElement);
    checkValueInput(event.srcElement);
    
};
*/
