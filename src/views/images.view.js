export default class ImageMedia {
  constructor(elt) {
    this.title = elt.title
    this.image = elt.image
    this.likes = elt.likes
    this.id = elt.photographerId
    
  }

  displayInList() {
    return `<figure>
        
            <img class="media-card media-image" src="../assets/medias/${this.id}/${this.image}" alt="${this.title}">
        
            <div class='figcaption-container'>
            <figcaption>${this.title}</figcaption>
            <p class='media-likes-count'>${this.likes}</p>
            <img src='../assets/icons/heart.svg'  class='heart-icon' alt='heart'>
            </div>
        </figure>
        `
  }
}