export function getModalWindow() {
    let div = document.createElement('div')
    div.classList.add("modal");
    div.setAttribute("id", "myModal");
    div.innerHTML = 
      `<div class="modal-content" id="modal-content">
<<<<<<< HEAD
            
        </div>`
    return div;
};

=======
            <p>Некоторый текст в модальном..</p>
        </div>`
    return div;
}
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
