import { addPostsToFeed } from "../../pages/feed.mjs";

export async function searchListener(posts) {
    const search = document.querySelector("#search");
    search.addEventListener("input", (event) => {
        event.preventDefault()
        const searchQuerry = search.value
        document.querySelector("#postContainer").innerHTML = "";

        let displayPosts = posts.filter((post) => {
            if(searchQuerry === "") {
                return post
            }else if(post.title.toLowerCase().includes(searchQuerry.toLowerCase())) {
                return post
            }else if(post.author.name.toLowerCase().includes(searchQuerry.toLowerCase())) {
                return post
            }else if(post.author.email.toLowerCase().includes(searchQuerry.toLowerCase())) {
                return post
            }
        })
        addPostsToFeed(displayPosts)   
    })
}