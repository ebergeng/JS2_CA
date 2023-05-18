import { LOGIN_URL } from "../constants.mjs";

/**
 * Logs in a user by sending a POST request to the login URL with the provided profile data.
 *
 * @async
 * @function
 * @name login
 * @param {Object} profile - The user profile data to be used for login.
 * @returns {Promise<Object>} - A promise that resolves to the response data from the login request.
 * @throws {Error} - If there is an error during the login process.
 */
export async function login(profile) {


    const options = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify(profile)
        }
        
    const respons = await fetch(LOGIN_URL , options);
    const json = await respons.json();

    if(!respons.ok) {
        const errorMessage = json.errors[0].message;
        throw new Error(errorMessage)
    }

    return json; 

}
