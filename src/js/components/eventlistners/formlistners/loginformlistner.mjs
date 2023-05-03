import { login } from "../../../api/auth/login.mjs";

export function loginFormListner() {
    const form = document.querySelector("#loginForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        
        const respons = await(login(profile));
    })
}