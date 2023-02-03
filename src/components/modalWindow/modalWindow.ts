import { createNodeObjects } from "../../utils/createNodeObject";


export function getModalWindow(): HTMLElement {
    let div = createNodeObjects(type='div', ["modal"], {id: "myModal",  display: "none"}, textContent = '')
    div.innerHTML = 
      `<div class="modal-content" id="modal-content">
            
        </div>`
    return div;
};

