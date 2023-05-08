import { getLocalStoreName } from "./lokalstore.mjs"

export async function isFollowing(followers) {
    const name = await getLocalStoreName()
    const following = followers.find((element) => {
          if(element.name === name) {
            return true
          }
    })
    return following
}
