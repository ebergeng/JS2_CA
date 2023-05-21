import { getHeader } from "../../helpers/header.mjs"
import { PROFILE_URL } from "../constants.mjs"

/**
 * Retrieves the profile data for the profile with the specified name.
 * @param {string} name - The name of the profile to retrieve.
 * @returns {Promise<Object>} A Promise that resolves to the profile data.
 */
export async function getProfile(name) {
    const options = {
        headers: getHeader(),
        method: "get"
    }
    const respons = await fetch(`${PROFILE_URL}${name}?&_followers=true`, options)
    return await respons.json()
}