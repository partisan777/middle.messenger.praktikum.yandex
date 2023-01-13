//fetch().then().catch();


export const getAddAvatarForm = () => {
    let div = document.createElement("div");
    div.classList.add("add-avatar");
    div.setAttribute("id", "add-avatar");
    div.innerHTML = `
        <div class="change-password-form" id="add-avatar-form">
            <div class="profile-subform" id="profile-subform">
                <div class="profile-input">
                    <label for="pr-form-email">Выберите изображение</label>
                    <input type="image" id="add-avatar-input" />
                </div>
            <div class="profile-buttons" id="profile-add-avatar-buttons">
                <div class="button-reg-form">
                    <button class="button-button" id="save-avatar-button">
                        Добавить
                    </button>
                </div>
                <div class="button-reg-form">
                    <button class="link-button" id="close-add-avatar-button">
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    `;

    return div;
}