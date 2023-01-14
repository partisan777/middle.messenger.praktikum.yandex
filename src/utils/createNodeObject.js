export function createNodeObjects (type='div', classNames=[], attr={id: ''}, textContent= '') {
    let obj = document.createElement(type);
    obj.classList.add(classNames.join(''));
    for (let key in attr) {
        obj.setAttribute(key, attr[key]);
    };
    return obj;
};

