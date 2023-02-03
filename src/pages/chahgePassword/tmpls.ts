import { createNodeObjects } from "../../utils/createNodeObject";


export function changePasswordFormTmpls(): HTMLElement {
    
    let div = createNodeObjects("div", ["change-password-form"], {id: "change-password"})
    div.innerHTML = `
      <form  class="change-password-form">
        <div class="form-input-change-password">
          <h2>Изменение пароля</h2>
          
        </div>
      </form>
    `
    return div;
};
