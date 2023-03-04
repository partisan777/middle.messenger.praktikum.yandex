export function createFormInput(metaAttr) {
    let result = 
        metaAttr.map((item) => (
            
           `<label for="${item.label !== undefined ? item.label : ""}">${item.labelVisible !== undefined ? item.labelVisible : ""}</label>
            <input ${item.inputAttrs.join(' ')}>
            <div class="${item.divErrorclassName}" id="${item.divErrorId}"></div>`
        )).join('')
        ; 
    return result;
};