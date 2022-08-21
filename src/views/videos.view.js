export default class VideoMedia {
  constructor(elt) {
    this.title = elt.title
    this.video = elt.video
    this.likes = elt.likes
    this.id = elt.photographerId
    this.liked = false
  }

  displayInList() {
    return `<figure aria-label='figure de ${this.title}' role="figure" aria-labelledby=${this.title} tabindex='1'>
       
        <video tabindex='1' id=${this.title} height='300' width='350' aria-label='vidéo de ${this.title} ' class=" media-card media-video" width="300" height="300" alt="${this.title}" src="../assets/medias/${this.id}/${this.video}" >
            <source  src="../assets/medias/${this.id}/${this.video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
   
        <div class='figcaption-container'>
        <figcaption  tabindex='1' aria-label='titre de la vidéo ${this.title}'>${this.title}</figcaption>
        <h4  tabindex='1' class='media-likes-count' aria-label='nombre de likes ${this.likes}'>${this.likes} </h4>
        <img tabindex='1' src='../assets/icons/heart.svg' role='button'  aria-label='bouton ajouter un like' class='heart-icon' alt='heart'>
        </div>
        </figure>
        `
  }
}
