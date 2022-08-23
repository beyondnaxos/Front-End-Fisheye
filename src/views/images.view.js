export default class ImageMedia {
  constructor(elt) {
    this.title = elt.title
    this.image = elt.image
    this.likes = elt.likes
    this.id = elt.photographerId
  }

  displayInList() {
    return `<figure aria-label='figure de ${this.title}'  role="figure" tabindex='-1' aria-label=${this.title}>

            <img tabindex='1' id=${this.title} height='300'  aria-label='Ouvrir la photo ${this.title}' width='350' class="media-card media-image" src="../assets/medias/${this.id}/${this.image}" alt="${this.title}">

            <div class='figcaption-container'>
            <figcaption tabindex='-1' aria-label='titre de la photo ${this.title}' >${this.title}</figcaption>
            <h2 tabindex='1' class='media-likes-count' aria-label='nombre de likes ${this.likes}'>${this.likes}</h2>
            <img tabindex='1' src='../assets/icons/heart.svg'  aria-label='bouton ajouter un like' class='heart-icon' alt='heart'>
            </div>
        </figure>
        `
  }
}
