import { createNodeObjects } from "../../utils/createNodeObject";

export let divlogin: HTMLElement = createNodeObjects("div", ["registration_form"], {id: "login-form"})
divlogin.innerHTML = `
    <form action="" class="form-login-main" id="form-login">
        <div class="form-input" id="log-form-child">
            <h2>Вход</h2>
        </div>
    </form>
`;


export let divreg: HTMLElement = createNodeObjects("div", ["registration_form"], {id: "reg-form"})
divreg.innerHTML = `
    <form action="" class="reg-form" class="reg-form">
        <div class="form-input" id="reg-form-child">
            <h2>Регистрация</h2>
        </div>
    </form>
`;




