import { REG_URL } from "../constants.mjs"

/**
 * Registers a user profile by sending a POST request to the registration URL with the provided profile data.
 *
 * @async
 * @function
 * @name register
 * @param {Object} profile - The user profile data to be registered.
 * @returns {Promise<Object>} - A promise that resolves to the response data from the registration request.
 * @throws {Error} - If there is an error during the registration process.
 */

export async function register(profile) {

    try {
        console.log(REG_URL)
        const respons = await fetch(REG_URL, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "post",
            body: JSON.stringify(profile)
        })
    
        return await respons.json()
    }catch(err) {
        console.log(err)
    }
}

register()