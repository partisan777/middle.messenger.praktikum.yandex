export function createNodeObjects (type: string = 'div', classNames: string[] = [], attr: object = {id: ''}, textContent: string= ''): HTMLElement {
    let obj: HTMLElement = document.createElement(type);
    if (classNames.length > 0) {
       obj.classList.add(classNames.join(''));
    };
    console.log(Object.entries(attr), attr)
    for (let key: string in attr) {
        if (attr[key] !== '' && attr[key] !== undefined) {
            
            obj.setAttribute(key, attr[key]);
        }
            
        
    };
    // console.log(attr);
    // console.log(obj);
    return obj;
};

export function transformToDOMElement (html_code: string): HTMLElement {
	const dom = document.createRange().createContextualFragment(html_code);
	return dom.firstChild;
};


