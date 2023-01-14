//fetch().then().catch();
<<<<<<< HEAD
import { createNodeObjects } from "../../utils/createNodeObject";
import { createFormInput } from "../../utils/createFormInput";
import { createButton } from "../../utils/createButton";
import { metaAttrInputs, metaAttrButtons } from "./metaAttrsAvatarForm";


export const getAddAvatarForm = () => {
    let div = createNodeObjects("div", ["add-avatar"], {id: "add-avatar"})
    console.log(metaAttrInputs);
    div.innerHTML = `
        <form class="change-password-form" id="add-avatar-form">
            <div class="form-input" >
                <h2>Выберите изображение</h2>
                ${createFormInput(metaAttrInputs)}
                ${createButton(metaAttrButtons)}
            </div>
        </form>
    `;

    return div;
};
=======


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
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
