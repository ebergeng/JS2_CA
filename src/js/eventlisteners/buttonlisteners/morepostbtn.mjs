import { getPosts } from "../../api/post/read.mjs";
import { addPostsToFeed } from "../../pages/feed.mjs";

export async function genMorePosts() {
    const morePostBtn = document.querySelector("#morePostBtn");

    let numberOfpost = 6;
    morePostBtn.addEventListener("click", async () => {
        numberOfpost += 6;
        const posts = await getPosts(6, numberOfpost);
        addPostsToFeed(posts);
        
    })
}