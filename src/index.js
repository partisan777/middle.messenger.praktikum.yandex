
import addRegFormView from "./pages/regForm/regForm";
import MainWindowView from "./pages/mainWindow/mainWindow";
import { addRegForm } from "./pages/regForm/regForm";
import { addMainWindow } from "./pages/mainWindow/mainWindow";
import {  isAuth, logIn, logOff, registrationNewUser } from './utils/auth';
import { signIn, signOut } from "./utils/functions";


const regForm = new addRegFormView();
const mainWindow = new MainWindowView();

const checkAuth = () => {
     if (isAuth() === false) {
      regForm.render();
     } else {
      regForm.close();  
      mainWindow.render();
     };
 };
