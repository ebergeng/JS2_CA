export function postTemplate(postData) {
    const card = document.createElement("div");
    card.classList.add("card");
    
    const img = document.createElement("img");
    if(postData.media) {
        img.src = postData.media
    }
    img.classList.add("card-img-top");
    card.append(img);

    const cardBody = document.createElement("a");
    card.append(cardBody)
    cardBody.href = `/post/?id=${postData.id}`

    const cardTitle = document.createElement("h5");
    cardTitle.innerText = postData.title
    cardBody.append(cardTitle)


    const cardText = document.createElement("p");
    cardText.innerText = postData.body.slice(0, 30)
    cardBody.append(cardText)

    return card
}