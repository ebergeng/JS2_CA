import { editPost } from "../../api/post/update.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

export async function updatePostFormListener(id){
    const form = document.querySelector("form");
    const submitButton = document.querySelector('button[type="submit"]');

    submitButton.disabled = true;

    form.addEventListener('input', () => {
        submitButton.disabled = false;
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        
        let formData = event.target;
        formData = new FormData(formData);
        const formInput = Object.fromEntries(formData.entries());
        
        form.querySelector("fieldset").disabled = true; 

        try {
            await editPost(formInput, id)
            form.querySelector("fieldset").disabled = false; 
            submitButton.disabled = true;
            displayMessage("success ", "Post successfully updated", "#message")

        }catch (err) {
            console.log(err)
            displayMessage("danger ", err, "#message")
        }
    })


}