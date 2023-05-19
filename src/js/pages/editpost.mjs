import { loginStatus } from "../api/auth/loginstatus.mjs";
import { getPost } from "../api/post/read.mjs";
import { logOutlistener } from "../eventlisteners/buttonlisteners/logoutbtn.mjs";
import { updatePostFormListener } from "../eventlisteners/formlisteners/updatepostformlistener.mjs";
import { logOut } from "../helpers/logout.mjs";
import { getParams } from "../helpers/params.mjs";

export async function updatePost() {
    if(loginStatus()){
        logOutlistener()
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
    }else {
        logOut()
    }
}