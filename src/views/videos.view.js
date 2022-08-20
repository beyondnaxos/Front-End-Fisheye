export default class VideoMedia {
  constructor(elt) {
    this.title = elt.title
    this.video = elt.video
    this.likes = elt.likes
    this.id = elt.photographerId
    this.liked = false
  }

  displayInList() {
    return `<figure>
       
        <video height='300' width='350' aria-label='vidéo de ${this.title} ' class=" media-card media-video" width="300" height="300" alt="${this.title}" src="../assets/medias/${this.id}/${this.video}" >
            <source  src="../assets/medias/${this.id}/${this.video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
   
        <div class='figcaption-container'>
        <figcaption aria-label='titre de la vidéo ${this.title}'>${this.title}</figcaption>
        <h4 class='media-likes-count' aria-label='nombre de likes ${this.likes}'>${this.likes} </h4>
        <img src='../assets/icons/heart.svg'  aria-label='bouton ajouter un like' class='heart-icon' alt='heart'>
        </div>
        </figure>
        `
  }
}
