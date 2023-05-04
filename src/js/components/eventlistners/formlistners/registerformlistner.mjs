import { register } from "../../../api/auth/register.mjs";

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
        
        
        const response = await register(profile);
        if(response){
            window.location = "/profile/login"
        }
    })
}

