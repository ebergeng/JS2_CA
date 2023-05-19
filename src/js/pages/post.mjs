import { getPost } from "../api/post/read.mjs";
import { createCommentFormListener } from "../eventlisteners/formlisteners/createcommentlistener.mjs";
import { getParams } from "../helpers/params.mjs";
import { PostTemplate } from "../ui/post.mjs";


export async function addPostsToPage(post) {
    const postContainer = document.querySelector("#postContainer")


    const newPost = new PostTemplate(post);
    await newPost.appendToParrent(postContainer);
    newPost.addComments()
}

export async function post() {
    const postID = getParams("id")
    const post = await getPost(postID)
    console.log(post)
    addPostsToPage(post)
    createCommentFormListener()
}