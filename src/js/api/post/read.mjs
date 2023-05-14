import { getHeader } from "../../helpers/header.mjs";
import { getPath } from "../../helpers/path.mjs";
import { PROFILE_URL } from "../constants.mjs";
import { POST_URL } from "../constants.mjs";


/**
 * Retrieves an array of posts from the API.
 *
 * @async
 * @function getPosts
 * @param {number} [limit=0] - The maximum number of posts to retrieve.
 * @param {number} [offset=0] - The number of posts to skip before retrieving.
 * @param {string} profileName - The name of the profile to retrieve posts for.
 * @returns {Promise<Array>} An array of post objects.
 *
 * @throws {Error} If there is an error retrieving the posts.
 */
export async function getPosts (limit=0, offset=0, profileName) {
    limit = `&limit=${limit}`;
    offset = `&offset=${offset}`;
    let postUrl;

    switch(getPath()) {
        case "/feed/":
            postUrl = POST_URL + limit + offset;
            break;
        case "/profile/":
            postUrl = PROFILE_URL + profileName + "/posts?&_author=true&_comments=true";
            break;
    }
    
    const options = {
        headers : getHeader(),
        method: "GET"
    }

    const respons = await fetch(postUrl , options);
    
    if(!respons.ok) {
        const error = await respons.json();
        const errorMessage = error.errors[0].message;
        throw new Error(errorMessage);
    }
    return await respons.json();
}