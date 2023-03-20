
// import { RegFormPage } from "../pages/regForm/regForm"
// import { LoginFormPage } from "../pages/regForm/loginForm"
// import {logIn, isAuth} from '../utils/auth';

// export function addRegFormFull(): void {

//     const container = document.getElementById("root");

//     let regForm = new RegFormPage({
//         pageTitle: 'Регистрация',
//         regHasAccButtonEvents: {events:
//             {click: (e: Event) => {
//                     regForm.changeVisible()
//                     loginForm.changeVisible()
//                     e.preventDefault();
//                 }
//             }
//         },
//         registrationButtonEvents: {events:
//             {click: (e: Event) => {
//                    e.preventDefault();
//                 }
//             }
//         }
//     });


//     regForm.hide()
//     let loginForm = new LoginFormPage({
//         pageTitle: 'Войти',
//         logHasAccButtonEvent:
//             {events:
//                 {click: (e: Event) => {
//                         regForm.changeVisible()
//                         loginForm.changeVisible()
//                         e.preventDefault();
//                     }
//                 }       
//         },
//         loginButtonEvents: {events:
//             {click: (e: Event) => {
//                     container.innerHTML = '';
//                     logIn();
//                     location.reload();
//                     e.preventDefault();
//                 }
//             }       
//         }
//     });
              
//     container.append(loginForm.getContent())
//     container.append(regForm.getContent())
// };




import { RegFormPage } from "../pages/regForm/regForm"
import { LoginFormPage } from "../pages/regForm/loginForm"
import {logIn} from '../utils/auth';



export  let regForm = new RegFormPage({
        pageTitle: 'Регистрация',
        regHasAccButtonEvents: {events:
            {click: (e: Event) => {
                    regForm.changeVisible();
                    loginForm.changeVisible();
                    e.preventDefault();
                }
            }
        },
        registrationButtonEvents: {events:
            {click: (e: Event) => {
                   e.preventDefault();
                }
            }
        }
    });


    
  export let loginForm = new LoginFormPage({
        pageTitle: 'Войти',
        logHasAccButtonEvent:
            {events:
                {click: (e: Event) => {
                        regForm.changeVisible();
                        loginForm.changeVisible();
                        e.preventDefault();
                    }
                }       
        },
        loginButtonEvents: {events:
            {click: (e: Event) => {
                    container.innerHTML = '';
                    logIn();
                    location.reload();
                    e.preventDefault();
                }
            }       
        }
    });
              

