import { loginStatus } from "../api/auth/loginstatus.mjs";
import { getPost } from "../api/post/read.mjs";
import { logOutlistener } from "../eventlisteners/buttonlisteners/logoutbtn.mjs";
import { createCommentFormListener } from "../eventlisteners/formlisteners/createcommentlistener.mjs";
import { logOut } from "../helpers/logout.mjs";
import { getParams } from "../helpers/params.mjs";
import { PostTemplate } from "../ui/post.mjs";


export async function addPostsToPage(post) {
    const postContainer = document.querySelector("#postContainer")


    const newPost = new PostTemplate(post);
    await newPost.appendToParrent(postContainer);
    newPost.addComments()
}

export async function post() {
    if(await loginStatus()) {
        logOutlistener()

        const postID = getParams("id")
        const post = await getPost(postID)
        console.log(post)
        addPostsToPage(post)
        createCommentFormListener()
    }else {
        logOut()
    }
}