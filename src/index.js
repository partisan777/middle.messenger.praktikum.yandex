
// import {MainWindowController} from "./controllers/mainWindow/mainWindowController";
// import {MainWindow} from "../src/models/mainWindow/mainWindow";
import {RegFormPage} from "../src/pages/regForm/regForm"
import {LoginFormPage} from "../src/pages/regForm/loginForm"
import {MainWindow} from "../src/pages/mainWindow/mainWindow"
import { ProfileFormPage } from "../src/pages/profile/profileForm"
import { ChangePasswordFormPage } from "./pages/changePassword/changePassword";
import {ChangeAvatarFormPage} from "./pages/changeAvatar/changeAvatar";
import { AddFilesPage } from "./pages/addFilesMenu/addFilesMenu"
import { ChatMenuPage } from "./pages/chatMenu/chatMenu";
import { AddFileFormPage} from "./pages/addFilesPages/addFile";
import {AddFotoVideoFormPage } from "./pages/addFilesPages/addFotoVideo";
import {AddLocationFormPage} from "./pages/addFilesPages/addLocation";
import {AddUserFormPage} from "./pages/chatMenuPages/addUserPage";
import {DelUserFormPage} from "./pages/chatMenuPages/delUserPage";



const container = document.getElementById("root");
// console.log(container)
const regFormPage2 = new MainWindow('Чат')
// const regFormPage = new AddFileFormPage('Чат')
// const regFormPage = new AddFotoVideoFormPage('Чат')
const regFormPage = new AddUserFormPage('Чат')
// const regFormPage = new DelUserFormPage('Чат')

// const regFormPage1 = new AddLocationFormPage('Чат')
// const regFormPage = new ChangeAvatarFormPage('Чат')
// const regFormPage = new ProfileFormPage({pageTitle: 'Профиль'})
// const regFormPage = new AddFilesWindowPage({pageTitle: 'Профиль'})
// const regFormPage = new ChatMenuPage({pageTitle: 'Профиль'})
// const regFormPage = new ChangePasswordFormPage ({pageTitle: "Смена пароля"});
// console.log(regFormPage.getContent().style.display="flex");
const func = () => {
    regFormPage.hide()
    // regFormPage1.show()
}
container.append(regFormPage.getContent())
container.append(regFormPage2.getContent())



regFormPage.show();
// regFormPage.hide();
// regFormPage

// const mainWindowContr = new MainWindowController(
// 	container, 
// 	new MainWindow()
// );

// window.MainWindowController = mainWindowContr;