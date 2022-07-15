export default class ImageMedia {
    constructor(elt){
        this.title = elt.title;
        this.image = elt.image;
        this.id = elt.photographerId
    }

    displayInList(){
        return `
        <figure>
            <image class="media-card media-image" src="../assets/medias/${this.id}/${this.image}" alt="${this.title}">
            <figcaption>${this.title}</figcaption>
        </figure>
        `
    }
}