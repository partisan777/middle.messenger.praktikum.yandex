import { createNodeObjects } from "../../utils/createNodeObject";
import { createButton } from "../../utils/createButton";
import { createFormInput } from "../../utils/createFormInput";
import { metaAttrButtons, metaAttrInputs} from "./metaAttrs";

export function regForm() {
  
    let div = createNodeObjects("div", ["registration_form"], {id: "reg-form"})
    div.innerHTML = `
        <form action="" class="reg-form">
          <div class="form-input" id="reg-form-child">
            <h2>Регистрация</h2>
            ${createFormInput(metaAttrInputs)}
            ${createButton(metaAttrButtons)}
          </div>
        </form>
    `;
    return div;
};

