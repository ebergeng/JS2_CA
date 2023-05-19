
import { getPosts } from "../api/post/read.mjs";
import { getProfile } from "../api/profiles/profile.mjs";
import { updateFormListner } from "../eventlisteners/formlisteners/updateprofileform.mjs";
import { editButton } from "../eventlisteners/buttonlisteners/editProfileBtn.mjs";
import { followButton } from "../eventlisteners/buttonlisteners/followbtn.mjs";
import { getLocalStoreName, load } from "../helpers/lokalstore.mjs";
import { PostTemplate } from "../ui/post.mjs";
import { profileTemplate } from "../ui/profile.mjs";
import { loginStatus } from "../api/auth/loginstatus.mjs";
import { logOut } from "../helpers/logout.mjs";
import { logOutlistener } from "../eventlisteners/buttonlisteners/logoutbtn.mjs";

/**
 * Adds an array of posts to the profile page.
 *
 * @function addPostsToProfile
 * @param {Array} posts - An array of post objects to add to the profile page.
 * @returns {void}
 */
export function addPostsToProfile(posts) {
    const postContainer = document.querySelector("#postContainer")

    for(let i = 0; i < posts.length; i += 1) {
        const postGroup = document.createElement("div");
        postGroup.classList.add("card-group");

        const grupedPosts = posts.slice(i, i + 1);
        grupedPosts.forEach(post => {
            const newPost = new PostTemplate(post);
            newPost.appendToParrent(postGroup);
        });

        postContainer.append(postGroup);
    }
}

/**
 * Retrieves profile information and posts for a given profile name.
 * If a profile name is provided in the URL, it will display the profile and its posts.
 * If no profile name is provided, it will display the user's own profile and posts.
 *
 * @async
 * @function profile
 * @returns {void}
 *
 */
export async function profile() {
    if(await loginStatus()) {
        logOutlistener()

        const urlParams = new URLSearchParams(window.location.search);
        let profileName = urlParams.get('name');
        
        if(profileName) {
            profileTemplate(await getProfile(profileName));
            const posts = await getPosts(0, 0, profileName);
            addPostsToProfile(posts);
        }
        else {
            editButton();
            updateFormListner();
    
            profileName = await JSON.parse(load("user"));
            profileName = profileName.name;
    
            profileTemplate(await getProfile(profileName));
            const posts =await getPosts(0, 0, await getLocalStoreName());
            addPostsToProfile(posts);
        }
        followButton(profileName);

    }else {
        logOut()
    }


}