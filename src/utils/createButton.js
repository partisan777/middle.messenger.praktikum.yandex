export function createButton(metaAttr) {
    let result = 
        metaAttr.map((item) => (
          `<button ${item.buttonAttrs.join(' ')}>
            ${item.labelVisible}
          </button>`
        )).join(''); 
    return result;
};

