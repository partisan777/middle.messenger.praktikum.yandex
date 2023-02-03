export const appendChildElements = (parentElemtId: string='', childComponents: [HTMLElement|ChildNode|Node]): void => {
    
    const elem = document.getElementById(parentElemtId);
    if (!elem) {
        console.log('Нет родительского элемента')
    } else {
        for (let comp of childComponents) {
           elem.appendChild(comp);
       }
    }
};


