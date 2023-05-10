export function load(item){
    return localStorage.getItem(item)
}

export async function getLocalStoreEmail() {
    const data = await JSON.parse(load("profile"))
    return data.email
}

export async function getLocalStoreName() {
    const data = await JSON.parse(load("profile"))
    return data.name
}