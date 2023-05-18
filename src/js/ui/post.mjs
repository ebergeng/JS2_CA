import { removePost } from "../api/post/delete.mjs";
import { getPost } from "../api/post/read.mjs";
import { getLocalStoreEmail } from "../helpers/lokalstore.mjs";

/**
 * A class representing a post template.
 *
 * @class
 * @name PostTemplate
 * @param {Object} postData - The post data.
 * @param {string} postData.id - The post ID.
 * @param {string} postData.title - The post title.
 * @param {string} postData.body - The post body.
 * @param {string} postData.author.name - The name of the post author.
 * @param {string} postData.author.email - The email of the post author.
 * @param {string} postData.media - The media URL of the post.
 */
export class PostTemplate {
    constructor (postData) {
        this.postId = postData.id;
        this.title = postData.title;
        this.body = postData.body;
        this.authorName = postData.author.name;
        this.authorEmail = postData.author.email;
        this.img = postData.media;
    }
    /**
     * Generates the HTML for the post template.
     *
     * @async
     * @function
     * @name generateHTML
     * @returns {Promise<HTMLDivElement>} - The post template HTML element.
     */
    async generateHTML() {
        const postContainer = document.createElement("div");
        postContainer.classList.add("card");

        const postInfo = document.createElement("div");
        postInfo.classList.add("postHeading");
        if(this.authorEmail === await getLocalStoreEmail()) {
            console.log("hey")
            const postInfoWrapper = document.createElement("div");
            
            const postProfileName = document.createElement("a");
            postProfileName.href = `href="/profile/?name=${this.authorName}`;
            postProfileName.innerHTML = `<h4>${this.authorName}</h4>`;

            const delButton = document.createElement("button");
            delButton.innerText = "Delete";
            this.delButtonListner(delButton);
            
            const editButton = document.createElement("button");
            editButton.innerText = "Edit";
            this.editButtonListner(editButton);
            
            postInfoWrapper.append(postProfileName, delButton, editButton);
            postInfo.append(postInfoWrapper);

        }else {
            postInfo.innerHTML = 
                                `<div class="container-fluid d-flex justify-content-between">
                                    <a href="/profile/?name=${this.authorName}">
                                        <h4>${this.authorName}</h4>
                                        <div>${this.authorEmail}</div>
                                    </a>
                                </div>`;
        }
        postContainer.append(postInfo);

        const postBodyWrapper = document.createElement("a");
        postBodyWrapper.href = `/post/?id=${this.postId}`;
        
        const postTitle = document.createElement("h4");
        postTitle.innerText = this.title;
        postBodyWrapper.append(postTitle);

        const img = document.createElement("img");
        if(this.img) {
            img.src = this.img;
            img.alt = `image for post with title ${this.title}`;
        }
        img.classList.add("card-img-top");
        postBodyWrapper.append(img);


        const postBody = document.createElement("p");
        postBody.innerText = this.body;
        postBodyWrapper.append(postBody);

        postContainer.append(postBodyWrapper);
        return postContainer;
    }

    /**
     * Appends the post template to the specified parent element.
     *
     * @async
     * @function
     * @name appendToParrent
     * @param {HTMLElement} parent - The parent element to append the post template to.
     * @returns {Promise<void>}
     */
    async appendToParrent(parrent) {
        parrent.append(await this.generateHTML());
    }



    /**
     * Adds a click event listener to the delete button.
     *
     * @function
     * @name delButtonListner
     * @param {HTMLButtonElement} button - The delete button element.
     * @returns {void}
     */
    delButtonListner(button) {
        button.addEventListener("click", () => {
            removePost(this.postId);
        })
    }

    /**
     * Adds a click event listener to the edit button.
     *
     * @function
     * @name editButtonListner
     * @param {HTMLButtonElement} button - The edit button element.
     * @returns {void}
     */
    editButtonListner(button) {
        button.addEventListener("click", async ()  => {
            location.href = `/feed/post/edit?id=${this.postId}`
        })
    };
}