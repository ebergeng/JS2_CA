import * as page from "./pages/index.mjs"


const path = location.pathname
console.log(path)
switch(path){
    case "/profile/login/":
        page.login()
        break
    case "/profile/register/":
        page.register()
        break
    case "/feed/":
        page.feed()
        break
    case "/profile/":
        
        page.profile()
        break

}   
