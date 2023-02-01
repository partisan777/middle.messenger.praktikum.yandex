import { createNodeObjects } from "./createNodeObject";

export function createFormInput(label: string, labelVisible: string, inputAttrs: string[], divErrorclassName: string, divErrorId: string, divErrorAttrs: string[]): HTMLElement
 {
    let result: HTMLElement = createNodeObjects(type='div', classNames=["div_input"], attr={id: ''}, textContent= '')
    
    if (label === "") {
        result.innerHTML = `<input ${inputAttrs.join(' ')}>`
    } else {
        result.innerHTML =       
            `<label for="${label !== undefined ? label : ""}">${labelVisible !== undefined ? labelVisible : ""}</label>
            <input ${inputAttrs.join(' ')}>
            <div class="${divErrorclassName}" id="${divErrorId}" ${divErrorAttrs.join(' ')}></div>`;
    } 
    return result;
};




