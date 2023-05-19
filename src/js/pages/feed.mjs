import { getPosts } from "../api/post/read.mjs";
import { genMorePosts } from "../eventlisteners/buttonlisteners/morepostbtn.mjs";
import { createFormListener } from "../eventlisteners/formlisteners/createpostformlistener.mjs";
import { searchListener } from "../eventlisteners/searchlistener/searchlistener.mjs";
import displayMessage from "../ui/common/displayMessage.mjs";
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
    try {
        const posts = await getPosts(99, 0);
        addPostsToFeed(posts)
        searchListener(posts);
       
    }
    catch (err) {
        console.log(err)
        displayMessage("danger", err,  "#message")
    }

    genMorePosts();
    createFormListener();
}