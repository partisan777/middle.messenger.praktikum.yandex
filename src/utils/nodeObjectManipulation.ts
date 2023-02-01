export const removeElement = (elementId: string): void => {
    const elem = document.getElementById(elementId);
    if (elem) {
        elem.remove();
    }
};

export const removeAllChildElements = (elementId: string): void => {
    const elem = document.getElementById(elementId);
    elem.replaceChildren();
};

export function hideElement(elementId: string): void {
  document.getElementById(elementId).style.display = "none";
    
};

export function showElement(elementId: string): void {
    document.getElementById(elementId).style.display = "flex";
};

export function openModalWindow(): void {
    const modal = document.getElementById("myModal");
    showElement("myModal");
    removeAllChildElements("modal-content");
}

export function closeModalWindow(): void {
    const modal = document.getElementById("myModal");
    hideElement("myModal");
    removeAllChildElements("modal-content");
}

