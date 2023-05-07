import { getPosts } from "../api/post/read.mjs";
import { postTemplate } from "../api/templates/post.mjs";
import { genMorePosts } from "../components/eventlistners/buttonlistners/morepostbtn.mjs";

const postContainer = document.querySelector("#postContainer")


export function addPostsToFeed(posts) {
    console.log("working")

    for(let i = 0; i < posts.length; i += 3) {
        const postGroup = document.createElement("div");
        postGroup.classList.add("card-group");

        const grupedPosts = posts.slice(i, i + 3)
        grupedPosts.forEach(post => {
            const genPost = postTemplate(post);
            postGroup.append(genPost)
        });

        postContainer.append(postGroup)
    }
}


export async function feed() {
    const newPost = {
        title: "This is a new post",
        body: "testing post"
    }
    const posts = await getPosts(9, 0);
    addPostsToFeed(posts)
    genMorePosts()


    
    
    
}