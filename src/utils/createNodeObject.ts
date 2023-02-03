

export function createNodeObjects (type: string = 'div', classNames: string[] = [], attr: Object, textContent: string= ''): HTMLElement {
    let obj: HTMLElement = document.createElement(type);
    if (classNames.length > 0) {
       obj.classList.add(classNames.join(''));
    };
    
    const keys: string[] = Object.entries(attr);
    for (let i: number = 0; i < keys.length; i++ ) {
        
        if (keys[i][1] !== '' && keys[i][1] !== undefined) {
            obj.setAttribute(keys[i][0], keys[i][1]);
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


