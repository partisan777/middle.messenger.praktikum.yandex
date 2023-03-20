import Router from "./models/components/Router";
import store from "./models/components/store";
import AuthController from "./controllers/authController";
import { LoginFormPage } from "./pages/regForm/loginForm";
import { RegFormPage } from "./pages/regForm/regForm";
import { MainWindowPage } from "./pages/mainWindow/mainWindow";
import { ProfileFormPage } from "./pages/profile/profileForm";


enum Routes {
    Index = '/',
    Register = '/register',
    Profile = '/profile',
    Messenger = '/messenger'
  }
  
  window.addEventListener('DOMContentLoaded', async () => {
    // console.log(Router)
    Router.use(Routes.Index, LoginFormPage)
    Router.use(Routes.Register, RegFormPage)
    Router.use(Routes.Profile, ProfileFormPage)
    Router.use(Routes.Messenger, MainWindowPage)
    console.log(Router.routes)
    let isProtectedRoute = true;
    switch (window.location.pathname) {
      case Routes.Index:
      case Routes.Register:
        isProtectedRoute = false;
        break;
    }
  
    try {
      await AuthController.fetchUser();
      // console.log(AuthController.fetchUser())
      Router.start();
  
      if (!isProtectedRoute) {
        Router.go(Routes.Profile)
      }
    } catch (e) {
      Router.start();
  
      if (isProtectedRoute) {
        Router.go(Routes.Index);
      }
    }
  
  });

