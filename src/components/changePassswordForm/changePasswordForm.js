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
      </form>
    `
    return div;
};
