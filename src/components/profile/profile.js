//fetch().then().catch();
import { profile } from "../../utils/const"
import { createNodeObjects } from "../../utils/createNodeObject";
import { createFormInput } from "../../utils/createFormInput";
import { createButton } from "../../utils/createButton";
import { metaAttrInputs, metaAttrButtons } from "./metaAttrsProfileForm";

export const getProfilePage = () => {
    let div = createNodeObjects("div", ["profile-main"], {id: "profile-main"})
    
    div.innerHTML = `
            <form class="profile-form" id="profile-form"> 
                <div class="profile-sidebar" id="profile-sidebar">
                    <button class="profile-exit" id="profile-exit">
                        Назад
                    </button>
                </div>
                <div class="profile-subform" id="profile-subform">
                  
                    <div class="form-input">
                        <h2>Данные пользователя</h2>
                        <div class="profile-avatar" id="profile-avatar">
                            <img src="#" alt="Avatar" />
                        </div>  
                        ${createFormInput(metaAttrInputs)}
                        ${createButton( metaAttrButtons )}
                    </div>
                </div>
            </form>
    `;
    return div;
};

