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
