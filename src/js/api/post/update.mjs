import { getHeader } from "../../helpers/header.mjs";
import { UPDATE_POST_URL } from "../constants.mjs"



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