
export function getAddChatUserForm() {
    let div = document.createElement('div')
    div.classList.add("manage-chat-user")
    div.setAttribute("id", "manage-chat-user");
    div.innerHTML = `
        <p>Добавить пользователя</p>
        <form action="" class="add-user-form">
        <div class="">
          <div class="reg-form-label"><label>Добавить пользователя</label></div>
          <div class="reg-form-input"><input type="text" name="" id="" required placeholder="Введите логин"></div>
          <div class="reg-error" id="error-add-chat-user"></div>
        </div>
        <div class="button-reg-form">
            <button class="button-button" type="button" id="registration-button">
                Добавить
            </button>
          </div>
          <div class="button-reg-form">
            <button class="link-button" type="button" id="close-manage-chat-user">
              Закрыть
            </button>
          </div>
      </form>
    `
    return div;
};


export function getDeleteChatUserForm() {
    let div = document.createElement('div')
    div.classList.add("manage-chat-user")
    div.setAttribute("id", "manage-chat-user");
    div.innerHTML = `
        <p>Удалить пользователя</p>
        <form action="" class="add-user-form">
        <div class="">
          <div class="reg-form-label"><label>Удалить пользователя</label></div>
          <div class="reg-form-input"><input type="text" name="" id="" required placeholder="Введите логин"></div>
          <div class="reg-error" id="error-add-chat-user"></div>
        </div>
        <div class="button-reg-form">
            <button class="button-button" type="button" id="registration-button">
                Добавить
            </button>
          </div>
          <div class="button-reg-form">
            <button class="link-button" type="button" id="close-manage-chat-user">
              Закрыть
            </button>
          </div>
      </form>
    `
    return div;
};