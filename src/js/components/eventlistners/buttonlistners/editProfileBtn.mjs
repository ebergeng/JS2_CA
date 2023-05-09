
export function editButton() {
    const btn = document.querySelector("#edit-button")
    const editBody = document.querySelector("#edit-body")
    const profileBody = document.querySelector("#profile-body")
    let displayEdit = true

    btn.addEventListener("click", () => {
        if (displayEdit) {
            editBody.classList.remove("d-none")
            profileBody.classList.add("d-none")
            btn.innerHTML = ""
            btn.classList.add("btn-close", "me-3", "mt-2")
            displayEdit = false
            
        }else {
            editBody.classList.add("d-none")
            profileBody.classList.remove("d-none")
            displayEdit = true
            btn.classList.remove("btn-close", "me-3", "mt-2")
            btn.innerHTML = "Edit"
        }
    })
}