import { LOGIN_URL } from "../constants.mjs";




export async function login(profile) {

    try {
        const respons = await fetch(LOGIN_URL, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "post",
            body: JSON.stringify(profile)
        })
    
        const result = await respons.json()
        const {accessToken, ...user} = result
        localStorage.setItem("token", accessToken)
        localStorage.setItem("profile", JSON.stringify(user))
        return result;

    }catch(err) {
        console.log(err)
    }

}