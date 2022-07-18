export default class VideoMedia {
    
    constructor(elt){
        this.title = elt.title;
        this.video = elt.video;
        this.id = elt.photographerId
    }

    displayInList(){
        return `
        <figure>
        <video class=" media-card media-video" width="300" height="300" controls>
            <source  src="../assets/medias/${this.id}/${this.video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <figcaption>${this.title}</figcaption>
        </div>
        `
    }

}

