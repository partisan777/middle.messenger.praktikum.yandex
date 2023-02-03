export const removeElement = (elementId: string): void => {
    const elem = document.getElementById(elementId);
    if (elem) {
        elem.remove();
    }
};

export const removeAllChildElements = (elementId: string): void => {
    const elem = document.getElementById(elementId);
    // const elem = document.querySelector(elementId);
    console.log(elem.firstChild);
    while (elem.firstChild) {
        console.log(elem.firstChild)
        elem.removeChild(elem.firstChild);
    }
};

export function hideElement(elementId: string): void {
  document.getElementById(elementId).style.display = "none";
    
};

export function showElement(elementId: string): void {
    document.getElementById(elementId).style.display = "flex";
};

export function openModalWindow(): void {
    showElement("myModal");
    removeAllChildElements("modal-content");
}

export function closeModalWindow(): void {
    hideElement("myModal");
    removeAllChildElements("modal-content");
}


export const genDomElement = (html_code: string): HTMLElement => {
	const elem = document.createRange().createContextualFragment(html_code);
	return elem.firstChild as HTMLElement;
};