export function postMenu () {
    const btn = document.querySelectorAll(".postNavBtn");
    btn.forEach((button) => {
        const parentElement = button.parentNode;
        const postNav = parentElement.parentNode
        button.addEventListener("click", () =>{
            postNav.classList.forEach(nav => {
                if(nav === "openMenu") {
                    postNav.classList.remove("openMenu")
                }else {
                    postNav.classList.add("openMenu")
                }
            })
            
        })
    } )
}