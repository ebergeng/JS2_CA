import { createPost } from "../../api/post/create.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";



export async function createFormListener() {
    const form = document.querySelector("#postForm");
    const submitButton = document.querySelector('button[type="submit"]');

    submitButton.disabled = true;

    form.addEventListener('input', () => {
        const title = form.querySelector("#title")
        if(title.value) {
            submitButton.disabled = false;
        }else {
            submitButton.disabled = true;
        }
    });
    
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const form = event.target;
        let formData = new FormData(form);
        formData = Object.fromEntries(formData.entries());

        try {
            await createPost(formData)
            form.querySelector("fieldset").disabled = true; 
            submitButton.disabled = true;
            location.reload()
        }catch(err) {
            displayMessage("danger ", err, "#message")
        }finally {
            form.querySelector("fieldset").disabled = false; 
            submitButton.disabled = false;
        }
    })
}