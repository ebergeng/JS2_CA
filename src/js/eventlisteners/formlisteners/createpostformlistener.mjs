import { createPost } from "../../api/post/create.mjs";



export async function createFormListener() {
    const form = document.querySelector("#postForm");
    
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const form = event.target;
        let formData = new FormData(form);
        console.log(formData)
        formData = Object.fromEntries(formData.entries());
        console.log(formData)
        
        if (await createPost(formData)) {
            console.log(formData)
        }
    })
}