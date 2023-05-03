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
}   
