import { getHeader } from "../../helpers/header.mjs"
import { getLocalStoreName } from "../../helpers/lokalstore.mjs"
import { PROFILE_URL } from "../constants.mjs"

/**
 * Retrieves the login status.
 * @returns {Promise<boolean>} A Promise that resolves to `true` if the login status is successful, or `false` otherwise.
 */
export async function loginStatus() {
    const pname = await getLocalStoreName()
    console.log(`${PROFILE_URL}${pname}`)
    const respons = await fetch(`${PROFILE_URL}${pname}`, {
        headers: getHeader()
    })
    if(respons.ok) {
        return true
    }else {
        return false
    }
}