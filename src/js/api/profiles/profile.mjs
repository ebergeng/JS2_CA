import { getHeader } from "../../helpers/header.mjs"
import { PROFILE_URL } from "../constants.mjs"

export async function getProfile(name) {
    const options = {
        headers: getHeader(),
        method: "get"
    }
    const respons = await fetch(`${PROFILE_URL}${name}?&_followers=true`, options)
    return await respons.json()
}