<<<<<<< HEAD
import { createNodeObjects } from "../../utils/createNodeObject";

export function manageChatUserForm(type='add') {

    const attr = {
      add: {
        label: 'Добавить пользователя',
        shortLabel: 'Добавить',
        idButtonAction: 'manage-chat-user-button-add',
        inputLoginId: 'manage-user-add-id'
      },
      del: {
        label: 'Удалить пользователя',
        shortLabel: 'Удалить',
        idButtonAction: 'manage-chat-user-button-del',
        inputLoginId: 'manage-user-del-id'
      }

    }
    let div = createNodeObjects("div", ["manage-chat-user"], {id: "manage-chat-user"})
    div.innerHTML = `
        <form action="">
          <div class="form-input">
          <h2>${attr[type].label}</h2>
          <label>${attr[type].label}</label>
          <input type="text" name="login" id="${attr[type].inputLoginId}" required placeholder="Введите логин">
          <div class="reg-error" id="${attr[type].inputLoginId}"></div>
          <button class="button-button" type="button" id="${attr[type].idButtonAction}">
              ${attr[type].label}
          </button>
          <button class="link-button" type="button" id="close-manage-chat-user">
              Закрыть
          </button>


        </div>
=======

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
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
      </form>
    `
    return div;
};

<<<<<<< HEAD
=======

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
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
