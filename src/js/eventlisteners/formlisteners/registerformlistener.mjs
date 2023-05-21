import { register } from "../../api/auth/register.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

/**
 * Registers a form listener on the #registerForm element that listens for a submit event.
 * When the form is submitted, it prevents the default form submission behavior, extracts the form data,
 * and registers the user profile using the `register` function. If the registration is successful,
 * it redirects the user to the login page.
 *
 * @async
 * @function
 * @name registerFormListner
 * @returns {void}
 */

export async function registerFormListner() {
    const form = document.querySelector("#registerForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());

        form.querySelector("fieldset").disabled = true; 
        
        try {
            const response = await register(profile);
            displayMessage("success ", "Success!",  "#message");
        }catch(err) {
            console.log(err)
            displayMessage("danger", err,  "#message");
        }
        finally {
            form.querySelector("fieldset").disabled = false; 
        }
        
        if(response){
            window.location = "/profile/login";
        }
    })
}

