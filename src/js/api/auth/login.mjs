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

    try {
        const respons = await fetch(LOGIN_URL, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "post",
            body: JSON.stringify(profile)
        })
    
        const result = await respons.json()
        const {accessToken, ...user} = result
        localStorage.setItem("token", accessToken)
        localStorage.setItem("profile", JSON.stringify(user))
        return result;

    }catch(err) {
        console.log(err)
    }

}

login()