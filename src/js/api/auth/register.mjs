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

    const options = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify(profile)
    }

    const respons = await fetch(REG_URL, options)
    const json = await respons.json();

    if(!respons.ok) {
        const errorMessage = json.errors[0].message;
        throw new Error(errorMessage)
    }

    return json; 

}