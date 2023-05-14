import { getPosts } from "../api/post/read.mjs";
import { genMorePosts } from "../components/eventlistners/buttonlistners/morepostbtn.mjs";
import { PostTemplate } from "../ui/post.mjs";

export function addPostsToFeed(posts) {
    const postContainer = document.querySelector("#postContainer");

    for(let i = 0; i < posts.length; i += 3) {
        const postGroup = document.createElement("div");
        postGroup.classList.add("card-group");

        const grupedPosts = posts.slice(i, i + 3)
        grupedPosts.forEach(post => {
            const newPost = new PostTemplate(post);
            newPost.appendToParrent(postGroup);
        });

        postContainer.append(postGroup); 
    }
}


export async function feed() {
    const posts = await getPosts(9, 0);
    addPostsToFeed(posts);
    genMorePosts();



    
    
    
}