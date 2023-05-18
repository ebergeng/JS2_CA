import { login } from "../../api/auth/login.mjs";
import { storeLogin } from "../../helpers/lokalstore.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";
/**
 * Registers a form listener on the #loginForm element that listens for a submit event.
 * When the form is submitted, it prevents the default form submission behavior, extracts the form data,
 * and logs in the user using the `login` function. If the login is successful,
 * it redirects the user to the feed page.
 *
 * @async
 * @function
 * @name loginFormListner
 * @returns {void}
 */
export async function loginFormListener() {
    const form = document.querySelector("#loginForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());

        form.querySelector("fieldset").disabled = true; 
        form.querySelector("fieldset").innerText = "Logging in..."; 
        
        try {
            const {accessToken, ...user} = await login(profile)
            storeLogin(accessToken, user) 
            location.href = "/feed"
        }
        catch(err) {
            console.log(err )
            displayMessage("danger", err,  "#message")
        }
        finally {
            form.querySelector("fieldset").disabled = false ;
            form.querySelector("fieldset").innerText = "Log in"; 
        }
    })
}