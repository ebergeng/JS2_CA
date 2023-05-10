
import { getProfile } from "../api/profiles/profile.mjs";
import { editButton } from "../components/eventlistners/buttonlistners/editProfileBtn.mjs";
import { followButton } from "../components/eventlistners/buttonlistners/followbtn.mjs";
import { updateFormListner } from "../components/eventlistners/formlistners/updateprofilelistner.mjs";
import { load } from "../helpers/lokalstore.mjs";
import { profileTemplate } from "../ui/profile.mjs";

export async function profile() {
    editButton()
    updateFormListner()
    
    
    const urlParams = new URLSearchParams(window.location.search);
    let profileName = urlParams.get('name');

    let porfileData;
    if(profileName) {
        profileTemplate(await getProfile(profileName))
    }
    else {
        profileName = await JSON.parse(load("profile"))
        profileName = profileName.name
        profileTemplate(await getProfile(profileName))
    }
    followButton(profileName)
    
}