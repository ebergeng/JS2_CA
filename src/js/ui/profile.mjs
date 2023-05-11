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
    const profileHeading = document.querySelector(".profile-card")

    const nameInput = document.querySelector("input[name]")
    const emailInput = document.querySelector("#email")

    if(profileData.email === await getLocalStoreEmail() ) {
        editBtn.classList.remove("d-none")
        followBtn.classList.add("d-none")
    }

    if (profileData.avatar) {
        profielImg.src = `${profileData.avatar}`
    }else {
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

    nameInput.value = profileData.name
    emailInput.value = profileData.email
    if(profileData.banner) {
        profileHeading.style.backgroundImage = `url(${profileData.banner})`
        profileHeading.style.display = "block";
    }
}