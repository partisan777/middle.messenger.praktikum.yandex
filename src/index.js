
// import {MainWindowController} from "./controllers/mainWindow/mainWindowController";
// import {MainWindow} from "../src/models/mainWindow/mainWindow";
import {RegFormPage} from "../src/pages/regForm/regForm"
import {LoginFormPage} from "../src/pages/regForm/loginForm"
const container = document.getElementById("root");
import {MainWindow} from "../src/pages/mainWindow/mainWindow"
import { ProfileFormPage } from "../src/pages/profile/profileForm"
import { ChangePasswordFormPage } from "./pages/changePassword/changePassword";
import {ChangeAvatarFormPage} from "./pages/changeAvatar/changeAvatar";
import { AddFilesWindowPage } from "./pages/addMenu/addFileMenu"
// console.log(container)
// const regFormPage = new MainWindow('Чат')
// const regFormPage = new ChangeAvatarFormPage('Чат')
// const regFormPage = new ProfileFormPage({pageTitle: 'Профиль'})
const regFormPage = new AddFilesWindowPage({pageTitle: 'Профиль'})
// const regFormPage = new ChangePasswordFormPage ({pageTitle: "Смена пароля"});
// console.log(regFormPage.getContent().style.display="flex");


container.append(regFormPage.getContent())
console.log(regFormPage.children.changeavatarformpage)
regFormPage.show();
regFormPage.hide()
// regFormPage.show()

// const mainWindowContr = new MainWindowController(
// 	container, 
// 	new MainWindow()
// );

// window.MainWindowController = mainWindowContr;