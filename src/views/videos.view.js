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
       
        <video height='300' width='350' class=" media-card media-video" width="300" height="300" alt="${this.title}" src="../assets/medias/${this.id}/${this.video}" >
            <source  src="../assets/medias/${this.id}/${this.video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
   
        <div class='figcaption-container'>
        <figcaption>${this.title}</figcaption>
        <h4 class='media-likes-count'>${this.likes} </h4>
        <img src='../assets/icons/heart.svg'  class='heart-icon' alt='heart'>
        </div>
        </figure>
        `
  }
}
