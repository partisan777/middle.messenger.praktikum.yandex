export function regForm() {
    
    let div = document.createElement('div')
    div.classList.add('registration_form')
    div.setAttribute("id", "reg-form");
    div.innerHTML = `
     <p>Регистрация</p>
        <form action="" class="reg-form">
        <div class="form-email">
          <div class="reg-form-label"><label for="email">Почта</label></div>
          <div class="reg-form-input"><input type="text" name="email" id="email" required placeholder="Введите адрес электронной почты"></div>
          <div class="reg-error" id="reg-error-email"></div>
        </div>
        <div class="form-login">
          <div class="reg-form-label"><label for="login">Логин</label></div>
          <div class="reg-form-input"><input type="text" name="login" id="login" required placeholder="Введите логин"></div>
          <div class="reg-error" id="reg-error-login"></div>
        </div>
        <div class="form-name">
          <div class="reg-form-label"><label for="first_name">Имя</label></div>
          <div class="reg-form-input"><input type="text" name="first_name" id="first_name" required placeholder="Введите имя"></div>
          <div><div class="reg-error" id="reg-error-name"></div>
        </div>
        <div class="form-lastname">
          <div class="reg-form-label"><label for="second_name">Фамилия</label></div>
          <div class="reg-form-input"><input type="text" name="second_name" id="second_name" required placeholder="Введите фамилию"></div>
          <div class="reg-error" id="reg-error-lastname"></div>
        </div>
        <div class="form-display-name">
          <div class="reg-form-label"><label for="display_name">Отображаемое имя</label></div>
          <div class="reg-form-input"><input type="text" name="display_name" id="display_name" required placeholder="Отображаемое имя"></div>
          <div class="reg-error" id="reg-error-lastname"></div>
        </div>
        <div class="form-phone">
          <div class="reg-form-label"><label for="phone">Телефон</label></div>
          <div class="reg-form-input"><input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="Введите номер телефона"></div>
          <div class="reg-error" id="reg-error-phone"></div>
        </div>
        <div class="form-password">
          <div class="reg-form-label"><label for="password">Пароль</label></div>
          <div class="reg-form-input"><input type="password" name="password" id="password" required placeholder="Введите пароль"></div>
          <div class="reg-error" id="reg-error-password"></div>
        </div>
        <div class="form-password-confirm"></div>
          <div class="reg-form-label"><label for="password-confirm">Повторите пароль</label></div>
          <div class="reg-form-input"><input type="password" name="password-confirm" id="password-confirm" required placeholder="Введите повтор пароля"></div>
          <div class="reg-error" id="reg-error-password-confir"></div></div>
        </div>
          <div class="button-reg-form">
            <button class="button-button" type="button" id="registration-button">
                Зарегистрироваться
            </button>
          </div>
          <div class="button-reg-form">
            <button class="link-button" type="button" id="login-button">
              Вход
            </button>
          </div>
      </form>
    `
    return div;
};
