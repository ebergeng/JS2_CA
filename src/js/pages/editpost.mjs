import { getPost } from "../api/post/read.mjs";
import { updatePostFormListener } from "../eventlisteners/formlisteners/updatepostformlistener.mjs";
import { getParams } from "../helpers/params.mjs";

export async function updatePost() {
    
    const id = getParams("id")

    try{
        const post = await getPost(id)
        const form = document.querySelector("form")
        form.querySelector("#title").value = post.title
        form.querySelector("textarea").value = post.body
        if(post.media) {
            form.querySelector("#media").value = post.media
            form.querySelector("fieldset").disabled = false; 
        }
        const pageTitle = document.querySelector("title").innerText = `Edit | ${post.title}`

        updatePostFormListener(id)
    }catch(err) {
        console.log(err)
    }
}