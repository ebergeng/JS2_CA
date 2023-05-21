import { getHeader } from "../../helpers/header.mjs"
import { PROFILE_URL } from "../constants.mjs"

/**
 * Updates the follow state for a profile with the specified name.
 * @param {string} name - The name of the profile to be followed/unfollowed.
 * @param {string} state - The state to set for the follow action. It can be "follow" or "unfollow".
 * @throws {Error} If the follow state update fails, an error with the corresponding error message is thrown.
 * @returns {Promise<Object>} A Promise that resolves to the result of the follow state update.
 */
export async function follow(name, state) {
    const options = {
        headers: getHeader(),
        method: "put",
        body: JSON.stringify("")
    }

    const respons = await fetch(`${PROFILE_URL}${name}/${state}`, options)
    if(!respons.ok) {
        const error = await respons.json();
        const errorMessage = error.errors[0].message;
        throw new Error(errorMessage)   
    }
    const result = await respons.json()
    window.location.reload()
    return result
}