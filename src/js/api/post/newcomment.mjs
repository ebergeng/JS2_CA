import { getHeader } from "../../helpers/header.mjs";
import { NEW_COMMENT_URL } from "../constants.mjs";


/**
 * Creates a new comment for a specified ID.
 * @param {Object} newComment - The new comment object to be created.
 * @param {string} id - The ID of the target post for the new comment.
 * @throws {Error} If the creation of the comment fails, an error with the corresponding error message is thrown.
 * @returns {Promise<boolean>} A Promise that resolves to `true` if the comment creation is successful.
 */
export async function createComment (newComment, id) {
    
    const options = {
        headers : getHeader(),
        method: "POST",
        body: JSON.stringify(newComment)
    }
    const respons = await fetch(`${NEW_COMMENT_URL}${id}/comment` , options)
    
    if(!respons.ok) {
        const error = await respons.json();
        const errorMessage = error.errors[0].message;
        throw new Error(errorMessage);
    }
    return true;
};