export default class ImageMedia {
  constructor(elt) {
    this.title = elt.title
    this.image = elt.image
    this.likes = elt.likes
    this.id = elt.photographerId
    
  }

  displayInList() {
    return `<figure>

            <img height='300' aria-label='photo de ${this.title} ' width='350' class="media-card media-image" src="../assets/medias/${this.id}/${this.image}" alt="${this.title}">

            <div class='figcaption-container'>
            <figcaption aria-label='titre de la photo ${this.title}' >${this.title}</figcaption>
            <h2 class='media-likes-count' aria-label='nombre de likes ${this.likes}'>${this.likes}</h2>
            <img src='../assets/icons/heart.svg'  aria-label='bouton ajouter un like' class='heart-icon' alt='heart'>
            </div>
        </figure>
        `
  }
}