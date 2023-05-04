import { login } from "../../../api/auth/login.mjs";
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
export async function loginFormListner() {
    const form = document.querySelector("#loginForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        
        const respons = await login(profile);
        if(respons) {
            window.location = "/feed/"
        }
    })
}