import { getHeader } from "../../helpers/header.mjs"
import { PROFILE_URL } from "../constants.mjs"


export async function follow(name, state) {
    const options = {
        headers: getHeader(),
        method: "put",
        body: JSON.stringify("")
    }

    const respons = await fetch(`${PROFILE_URL}${name}/${state}`, options)
    if(!respons.ok) {
        const error = await respons.json();
        const errorMessage = error.errors[0].message;
        throw new Error(errorMessage)   
    }
    const result = await respons.json()
    window.location.reload()
    return result
}