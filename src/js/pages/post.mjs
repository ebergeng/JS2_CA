import { getPost } from "../api/post/read.mjs";
import { getParams } from "../helpers/params.mjs";
import { PostTemplate } from "../ui/post.mjs";


export function addPostsToPage(post) {
    const postContainer = document.querySelector("#postContainer")
    const newPost = new PostTemplate(post);
    newPost.appendToParrent(postContainer);


}

export async function post() {
    const postID = getParams("id")
    const post = await getPost(postID)
    console.log(post)
    addPostsToPage(post)
}