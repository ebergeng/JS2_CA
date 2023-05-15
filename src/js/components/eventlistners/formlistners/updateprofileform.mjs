import { edit } from "../../../api/profiles/edit.mjs";
import { getLocalStoreName } from "../../../helpers/lokalstore.mjs";

export async function updateFormListner() {
    const form = document.querySelector("#updateForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const update = Object.fromEntries(formData.entries());
        const profileName = await getLocalStoreName();
        
        const response = await edit(update, profileName);
        if(response){
            console.log("yes!");
        }
    })
}