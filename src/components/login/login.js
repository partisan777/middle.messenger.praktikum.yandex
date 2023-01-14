<<<<<<< HEAD
import { createNodeObjects } from "../../utils/createNodeObject";
import { createFormInput } from "../../utils/createFormInput";
import { createButton } from "../../utils/createButton";
import { metaAttrInputs, metaAttrButtons } from "./metaAttrs";

export function loginForm() {
    let div = createNodeObjects("div", ["registration_form"], {id: "login-form"})
    div.innerHTML = `
      <form action="" class="form-login-main" id="form-login-main">
        <div class="form-input">
          <h2>Вход</h2>
          ${createFormInput(metaAttrInputs)}
          ${createButton(metaAttrButtons)}
        </div>
      </form>
    `;
    
    return div;
};


=======
export function loginForm() {
    
    let div = document.createElement('div')
    div.classList.add('registration_form');
    div.setAttribute("id", "login-form");
    div.innerHTML = `
        <p>Вход</p>
        <form action="" class="form-example">
        <div class="form-login">
          <div class="reg-form-label"><label for="login">Логин</label></div>
          <div class="reg-form-input"><input type="text" name="login" id="login" required placeholder="Введите логин"></div>
          <div class="reg-error" id="reg-error-login"></div>
        </div>
        <div class="form-password">
          <div class="reg-form-label"><label for="password">Пароль</label></div>
          <div class="reg-form-input"><input type="password" name="password" id="password" required placeholder="Введите пароль"></div>
          <div class="reg-error" id="reg-error-password"></div>
        </div>
        <div class="button-reg-form">
          <button class="button-button" type="button" id="login-button">
            Вход
          </button>
        </div>
        <div class="button-reg-form">  
          <button class="link-button" type="button" id="registration-button">
              Нет аккаунта?
          </button>    
        </div>
      </form>
    `
    return div;
};
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
