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
      </form>
    `
    return div;
};

