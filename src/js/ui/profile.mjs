import { isFollowing } from "../helpers/following.mjs";
import { getLocalStoreEmail, getLocalStoreName, load } from "../helpers/lokalstore.mjs";

export async function profileTemplate(profileData) {
    console.log(profileData)
    const editBtn = document.querySelector("#edit-button");
    const profielImg = document.querySelector("#profile-img");
    const profileName = document.querySelector("#profile-name");
    const followers = document.querySelector("#followers");
    const following = document.querySelector("#following");
    const followBtn = document.querySelector("#follow-button");

    if(profileData.email === await getLocalStoreEmail() ) {
        editBtn.classList.remove("d-none")
        followBtn.classList.add("d-none")
    }
    try {
        profielImg.src = `${profileData.avatar}`
    }catch(err){
        console.log(err)
        profielImg.src = "/img/user.png"
    }
    profileName.innerHTML = profileData.name
    followers.innerHTML = profileData._count.followers
    following.innerHTML = profileData._count.following
    
    if(await isFollowing(profileData.followers)) {
        followBtn.innerHTML = `Unfollow`
    }else {
        followBtn.innerHTML = `Follow`
    }
}