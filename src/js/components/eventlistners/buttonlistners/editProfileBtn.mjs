
export function editButton() {
    const btn = document.querySelector("#edit-button")
    const editBody = document.querySelector("#edit-body")
    const profileBody = document.querySelector("#profile-body")
    let displayEdit = true

    btn.addEventListener("click", () => {
        if (displayEdit) {
            editBody.classList.remove("d-none")
            profileBody.classList.add("d-none")
            displayEdit = false
        }else {
            editBody.classList.add("d-none")
            profileBody.classList.remove("d-none")
            displayEdit = true
        }
    })
}