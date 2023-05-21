import { getHeader } from "../../helpers/header.mjs";
import { DELETE_POST_URL } from "../constants.mjs";


/**
 * Removes a post with the specified ID.
 * @param {string} id - The ID of the post to be removed.
 * @throws {Error} If the removal of the post fails, an error with the corresponding error message is thrown.
 * @returns {void}
 */
export async function removePost (id) {
    
    const options = {
        headers : getHeader(),
        method: "DELETE",
    }
    const respons = await fetch(DELETE_POST_URL + id , options);
    
    if(!respons.ok) {
        const error = await respons.json();
        const errorMessage = error.errors[0].message;
        throw new Error(errorMessage);
    }
    window.location.reload();
};