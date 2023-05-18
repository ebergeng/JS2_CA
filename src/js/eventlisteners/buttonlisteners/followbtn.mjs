import { follow } from "../../api/profiles/follow.mjs";


export async function followButton(name) {
    const button = document.querySelector("#follow-button");
    button.addEventListener("click", () => {
        follow(name, button.innerHTML.toLowerCase())
    })
} 