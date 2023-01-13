//fetch().then().catch();
import { profile } from "../../utils/const"

export const getProfilePage = () => {
    let div = document.createElement("div");
    div.classList.add("profile-main");
    div.setAttribute("id", "profile-main");
    div.innerHTML = `
            <div class="profile-form" id="profile-form">    
                <div class="profile-sidebar" id="profile-sidebar">
                    <button class="profile-exit" id="profile-exit">
                        Назад
                    </button>
                </div>
                <div class="profile-subform" id="profile-subform">
                    <div class="profile-avatar" id="profile-avatar">
                        <img src="#" alt="Avatar" />
                    </div>  
                    <div class="profile-input">
                        <label for="pr-form-email">Почта</label>
                        <input type="text" id="pr-form-email" name="email" value="${profile.email}" />
                    <div class="profile-input">
                        <label for="pr-form-login">Логин</label>
                        <input type="text" id="pr-form-login" name="login" value="${profile.login}" />
                    </div>
                    <div class="profile-input">
                        <label for="pr-form-first_name">Имя</label>
                        <input type="text" id="pr-form-first_name" name="first_name"  value="${profile.first_name}" />
                    </div>
                    <div class="profile-input">
                        <label for="pr-form-second_name">Фамилия</label>
                        <input type="text" id="pr-form-second_name" name="second_name"  value="${profile.second_name}" />
                    </div>
                    <div class="profile-input">
                        <label for="pr-form-display_name">Имя в чате</label>
                        <input type="text" id="pr-form-display_name" name="display_name"  value="${profile.display_name}" />
                    </div>
                    <div class="profile-input">
                        <label for="pr-form-login">Телефон</label>
                        <input type="text" id="pr-form-login" name="phone"  value="${profile.phone}" />
                    </div>
                </div>
                <div class="profile-buttons" id="profile-buttons">
                    <div class="button-reg-form">
                        <button class="link-button" id="profile-change-data">
                            Изменить данные
                        </button>
                    </div>
                    <div class="button-reg-form">
                        <button class="link-button" id="profile-change-password">
                            Изменить пароль
                        </button>
                    </div>
                    <div class="button-reg-form">
                        <button class="button-button" id="profile-logout">
                            Выйти
                        </button>
                    </div>
                </div>
        </div>    

    `;

    return div;
}