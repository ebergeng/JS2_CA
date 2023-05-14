import { createPost } from "../api/post/create.mjs";
import { getPosts } from "../api/post/read.mjs";
import { genMorePosts } from "../components/eventlistners/buttonlistners/morepostbtn.mjs";
import { postMenu } from "../components/eventlistners/buttonlistners/postBtn.mjs";
import { PostTemplate } from "../ui/post.mjs";

const postContainer = document.querySelector("#postContainer")


export function addPostsToFeed(posts) {
    console.log("working")
    

    for(let i = 0; i < posts.length; i += 3) {
        const postGroup = document.createElement("div");
        postGroup.classList.add("card-group");

        const grupedPosts = posts.slice(i, i + 3)
        grupedPosts.forEach(post => {
            const newPost = new PostTemplate(post)
            newPost.appendToParrent(postGroup)
        });

        postContainer.append(postGroup)
        postMenu()
        
        
    }
}


export async function feed() {
    const newPost = {
        title: "This is a new post2",
        body: "testing post"
    }
    const posts = await getPosts(9, 0);
    addPostsToFeed(posts)
    genMorePosts()



    
    
    
}