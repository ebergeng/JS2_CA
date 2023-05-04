import { getHeader } from "../../helpers/header.mjs";
import { POST_URL } from "../constants.mjs";

export async function getPosts (limit=10) {
    
    limit = `&limit=${limit}`
    const options = {
        headers : getHeader(),
        method: "GET"
    }

    const respons = await fetch(POST_URL + limit , options)
    
    if(!respons.ok) {
        const error = await respons.json();
        const errorMessage = error.errors[0].message;
        throw new Error(errorMessage)
    }

    return await respons.json()
}