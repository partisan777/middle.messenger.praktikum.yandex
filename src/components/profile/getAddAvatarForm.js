//fetch().then().catch();
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
