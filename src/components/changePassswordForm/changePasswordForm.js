<<<<<<< HEAD
import { createNodeObjects } from "../../utils/createNodeObject";
import { createFormInput } from "../../utils/createFormInput";
import { createButton } from "../../utils/createButton";
import { metaAttrInputs, metaAttrButtons } from "./metaAttrs";




export function changePasswordForm() {
    
    let div = createNodeObjects("div", ["change-password-form"], {id: "change-password"})
    div.innerHTML = `
      <form  class="change-password-form">
        <div class="form-input">
          <h2>Изменение пароля</h2>
          ${createFormInput ( metaAttrInputs )}
          ${createButton(metaAttrButtons)}
        </div>
=======
export function changePasswordForm() {
    
    let div = document.createElement('div')
    div.classList.add("change-password-form")
    div.setAttribute("id", "change-password");
    div.innerHTML = `
        <p>Сменить пароль</p>
        <form action="" class="change-password-form">
        <div class="form-password">
          <div class="reg-form-label"><label for="password">Текущий пароль</label></div>
          <div class="reg-form-input"><input type="password" name="oldPassword" id="password" required placeholder="Введите пароль"></div>
          <div class="reg-error" id="error-current-password"></div>
        </div>
        <div class="new-password"></div>
          <div class="reg-form-label"><label for="password-confirm">Новый пароль</label></div>
          <div class="reg-form-input"><input type="password" name="newPassword" id="new-password" required placeholder="Введите повтор пароля"></div>
          <div class="reg-error" id="error-new-password"></div></div>
        </div>
        <div class="form-new-password-confirm"></div>
          <div class="reg-form-label"><label for="new-password-confirm">Повторите пароль</label></div>
          <div class="reg-form-input"><input type="password" name="newPassword-confirm" id="new-password-confirm" required placeholder="Введите повтор пароля"></div>
          <div class="reg-error" id="error-new-password-confirm"></div></div>
        </div>
          <div class="button-reg-form">
            <button class="button-button" type="button" id="registration-button">
                Сменить пароль
            </button>
          </div>
          <div class="button-reg-form">
            <button class="link-button" type="button" id="close-change-password-form-button">
              Закрыть
            </button>
          </div>
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
      </form>
    `
    return div;
};
