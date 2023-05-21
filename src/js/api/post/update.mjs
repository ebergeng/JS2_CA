import { getHeader } from "../../helpers/header.mjs";
import { UPDATE_POST_URL } from "../constants.mjs"


/**
 * Edits a post with the specified ID.
 * @param {Object} postData - The updated post data.
 * @param {string} id - The ID of the post to be edited.
 * @throws {Error} If the editing of the post fails, an error with the corresponding error message is thrown.
 * @returns {Promise<boolean>} A Promise that resolves to `true` if the post editing is successful.
 */
export async function editPost (postData, id) {
    
    const options = {
        headers : getHeader(),
        method: "put",
        body: JSON.stringify(postData)
    }
    const respons = await fetch(UPDATE_POST_URL + id , options)
    
    if(!respons.ok) {
        const error = await respons.json();
        const errorMessage = error.errors[0].message;
        throw new Error(errorMessage);
    }
    return true;
};