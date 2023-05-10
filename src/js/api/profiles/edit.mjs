import { getHeader } from "../../helpers/header.mjs";
import { PROFILE_URL } from "../constants.mjs";

export async function edit(profile, name) {

    const options = {
        headers: getHeader(),
        method: "put",
        body: JSON.stringify(profile)
    }

    const respons = await fetch(`${PROFILE_URL}${name}/media`, options)

    if(!respons.ok) {
        const error = await respons.json();
        const errorMessage = error.errors[0].message;
        throw new Error(errorMessage)   
    }
    const result = await respons.json()
    
    return result
}