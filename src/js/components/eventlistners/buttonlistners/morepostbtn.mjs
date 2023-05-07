import { getPosts } from "../../../api/post/read.mjs";
import { addPostsToFeed } from "../../../pages/feed.mjs";

export async function genMorePosts() {
    const morePostBtn = document.querySelector("#morePostBtn");

    let numberOfpost = 0
    morePostBtn.addEventListener("click", async () => {
        numberOfpost += 9
        const posts = await getPosts(9, numberOfpost)
        addPostsToFeed(posts)
        
    })
}