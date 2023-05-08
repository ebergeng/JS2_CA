import { getHeader } from "../../helpers/header.mjs";
import { POST_URL } from "../constants.mjs";


/**
 * Fetches the latest posts from the server with optional limit and offset parameters.
 *
 * @async
 * @function
 * @name getPosts
 * @param {number} [limit=0] - The maximum number of posts to fetch.
 * @param {number} [offset=0] - The number of posts to skip before fetching.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of post objects.
 * @throws {Error} - If there is an error during the fetch process.
 */
export async function getPosts (limit=0, offset=0) {
    
    limit = `&limit=${limit}`
    offset = `&offset=${offset}`
    const options = {
        headers : getHeader(),
        method: "GET"
    }

    const respons = await fetch(POST_URL + limit + offset , options)
    
    if(!respons.ok) {
        const error = await respons.json();
        const errorMessage = error.errors[0].message;
        throw new Error(errorMessage)
    }
    return await respons.json()
}