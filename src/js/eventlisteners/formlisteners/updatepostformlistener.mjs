import { getPost } from "../../api/post/read.mjs";
import { getParams } from "../../helpers/params.mjs";




export async function updatePostFormListener(){
    const form = document.querySelector("#postForm");
    const id = getParams(id)

    const button = form.querySelector("button");
    button.disabled = true;

    try{
        const post = await getPost(id)
        console.log(post)
    }catch(err) {
        console.log(err)
    }
}