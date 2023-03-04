import  {isAuth} from "./utils/auth";

import { addMainWindowFull } from "./mainFIles/addMainWindow"
import { addRegFormFull } from "./mainFIles/addRegForm";


const isAuthState: boolean = isAuth();
// console.log(isAuth());
if (!isAuthState) {
    addRegFormFull();
} else {
    addMainWindowFull();
}



