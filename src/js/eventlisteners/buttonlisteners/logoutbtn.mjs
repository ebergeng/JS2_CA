import { logOut } from "../../helpers/logout.mjs"

export function logOutlistener() {
    const logoutBtn = document.querySelector("#logOut") 
    
    logoutBtn.addEventListener("click", () => {
        logOut()
    })
}