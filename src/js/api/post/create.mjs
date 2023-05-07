import { getHeader } from "../../helpers/header.mjs";
import { CREATE_POST_URL } from "../constants.mjs";


/**
 * Creates a new post by sending a POST request to the create post URL with the provided post data.
 *
 * @async
 * @function
 * @name createPost
 * @param {Object} newPost - The post data to be created.
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the create post request is successful.
 * @throws {Error} - If there is an error during the create post process.
 */
export async function createPost (newPost) {
    
    const options = {
        headers : getHeader(),
        method: "POST",
        body: JSON.stringify(newPost)
    }
    const respons = await fetch(CREATE_POST_URL , options)
    
    if(!respons.ok) {
        const error = await respons.json();
        const errorMessage = error.errors[0].message;
        throw new Error(errorMessage)
    }
    return true
}