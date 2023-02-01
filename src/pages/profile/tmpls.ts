
import { createNodeObjects } from "../../utils/createNodeObject";


export const getProfilePage = (): HTMLElement => {
    let div = createNodeObjects("div", ["profile-main"], {id: "profile-main"})
    // console.log(inputDataToMetaObject(metaAttrInputs, profile));
    div.innerHTML = `
            <div class="profile-form" id="profile-form"> 
                <div class="profile-sidebar" id="profile-sidebar">
                </div>
                <div class="profile-subform" id="profile-subform">
                    <div class="profile-avatar" id="profile-avatar">
                        <img src="#" alt="Avatar" />
                    </div>
                    <form class="form-input" id="profile-form-input">
                        <h2>Данные пользователя</h2>
                    </form>
                </div>
            </div>
    `;
    return div;
};


