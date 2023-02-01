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

export const genDomElement = (html_code: string): HTMLElement => {
	const elem = document.createRange().createContextualFragment(html_code);
	return elem.firstChild as HTMLElement;
};

