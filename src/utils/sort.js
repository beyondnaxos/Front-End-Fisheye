import factory from '../factories/media.js';
import ImageMedia from '../views/images.view.js';
import VideoMedia from '../views/videos.view.js';

class Sort {
  static init(e, mediasFromView) {
    const mediaContainer = document.querySelector('.medias-container');
    const medias = mediasFromView;
    const property = e.target.value;
    const sort = new Sort(medias, property, mediaContainer);
    console.log(medias);
    sort.sortBy(property);
    console.log(medias);
    sort.display();
  }

  constructor(medias, property, mediaContainer) {
    this.medias = medias;
    this.property = property;
    this.mediaContainer = mediaContainer;
  }

  sortBy(property) {
    if (property === 'popularity') {
      this.medias.sort((a, b) => {
        return b.likes - a.likes;
      });
    } else if (property === 'date') {
      this.medias.sort((a, b) => {
        return b.date - a.date;
      });
    } else if (property === 'price') {
      this.medias.sort((a, b) => {
        return b.price - a.price;
      });
    }
  }

  buildDom(media) {
    if (media.image) {
      return `<figure>
        
            <img class="media-card media-image" src="../assets/medias/${media.photographerId}/${media.image}" alt="${media.title}">
        
            <div class='figcaption-container'>
            <figcaption>${media.title}</figcaption>
            <p class='media-likes-count'>${media.likes} <3</p>
            </div>
        </figure>
        `;
    } else {
      return `<figure>
       
      <video class=" media-card media-video" width="300" height="300" src="../assets/medias/${media.photographerId}/${media.video}" >
          <source  src="../assets/medias/${media.photographerId}/${media.video}" type="video/mp4">
          Your browser does not support the video tag.
      </video>
 
      <div class='figcaption-container'>
      <figcaption>${media.title}</figcaption>
      <p class='media-likes-count'>${media.likes} <3</p>
      </div>
      </figure>
      `;
    }
  }

  display() {
    this.mediaContainer.innerHTML = '';
    this.medias.forEach((media) => {
      this.mediaContainer.innerHTML = this.buildDom(media);
    });
  }
}

export default Sort;
