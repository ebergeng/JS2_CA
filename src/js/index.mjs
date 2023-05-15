import { getPath } from "./helpers/path.mjs";
import * as page from "./pages/index.mjs";



switch(getPath()){
    case "/profile/login/":
        page.login();
        break;
    case "/profile/register/":
        page.register();
        break;
    case "/feed/":
        page.feed();
        break;
    case "/profile/":
        page.profile();
        break;
}   
