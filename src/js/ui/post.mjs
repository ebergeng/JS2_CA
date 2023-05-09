/**
 * Creates a new post card element with the provided post data.
 *
 * @function
 * @name postTemplate
 * @param {Object} postData - The post data to be used for creating the card.
 * @returns {HTMLElement} - The post card element.
 */
export function postTemplate(postData) {
    const card = document.createElement("div");
    card.classList.add("card");

    const postNav = document.createElement("div");
    postNav.classList.add("postHeading")
    postNav.innerHTML = `<div class="container-fluid d-flex justify-content-between">
                            <a href="/profile/?name=${postData.author.name.toString()}">
                                <h4>${postData.author.name}</h4>
                                <p>${postData.author.email}</p>
                            </a>
                        </div>`

    card.append(postNav)

    const cardBody = document.createElement("a");
    cardBody.classList.add("cardBody")
    card.append(cardBody)
    cardBody.href = `/post/?id=${postData.id}`

    const img = document.createElement("img");
    if(postData.media) {
        img.src = postData.media
    }

    img.classList.add("card-img-top");
    cardBody.append(img);

    const cardTitle = document.createElement("h3");
    cardTitle.innerText = postData.title
    cardBody.append(cardTitle)


    const cardText = document.createElement("p");
    cardText.innerText = postData.body
    cardBody.append(cardText)

    return card
}