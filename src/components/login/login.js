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


