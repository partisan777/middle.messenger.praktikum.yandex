import { createNodeObjects } from "./createNodeObject";

export function createButton(labelVisible: string, buttonAttrs: string[]): ChildNode {
    let result = createNodeObjects(type='div', classNames=[], attr={id: ''}, textContent = '')
    result.innerHTML =       
        `<button ${buttonAttrs.join(' ')}>
            ${labelVisible}
          </button>`
    return result.firstChild;
};

