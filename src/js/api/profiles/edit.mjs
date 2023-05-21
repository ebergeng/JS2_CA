import { getHeader } from "../../helpers/header.mjs";
import { PROFILE_URL } from "../constants.mjs";

/**
 * Edits the profile with the specified name.
 * @param {Object} profile - The updated profile data.
 * @param {string} name - The name of the profile to be edited.
 * @throws {Error} If the editing of the profile fails, an error with the corresponding error message is thrown.
 * @returns {Promise<Object>} A Promise that resolves to the updated profile data.
 */
export async function edit(profile, name) {

    const options = {
        headers: getHeader(),
        method: "put",
        body: JSON.stringify(profile)
    }

    const respons = await fetch(`${PROFILE_URL}${name}/media`, options)

    if(!respons.ok) {
        const error = await respons.json();
        const errorMessage = error.errors[0].message;
        throw new Error(errorMessage)   
    }
    const result = await respons.json()
    
    return result
}