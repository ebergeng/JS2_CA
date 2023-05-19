import { getHeader } from "../../helpers/header.mjs";
import { NEW_COMMENT_URL } from "../constants.mjs";

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