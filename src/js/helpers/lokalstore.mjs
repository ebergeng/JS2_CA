export function load(item){
    return localStorage.getItem(item)
}

export async function getProfileName() {
    const name = await JSON.parse(load("profile"))
    return name.name
}