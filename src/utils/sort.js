// import heart.svg

class Sort {
  static init(sortValue, mediasFromView) {
    const mediaContainer = document.querySelector('.medias-container')
    const medias = mediasFromView
    const property = sortValue

    const sort = new Sort(medias, property, mediaContainer)
    console.log(medias)
    sort.sortBy(property)
    console.log(medias)
    sort.display()
  }

  constructor(medias, property, mediaContainer) {
    this.medias = medias
    this.property = property
    this.mediaContainer = mediaContainer
  }

  sortBy(property) {
    if (property === 'popularity') {
      this.medias.sort((a, b) => {
        return b.likes - a.likes
      })
    } else if (property === 'date') {
      this.medias.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
    } else if (property === 'price') {
      this.medias.sort((a, b) => {
        return b.price - a.price
      })
    }
  }

  buildDom(media) {
    if (media.image) {
      return `<figure>
            <img class="media-card media-image" src="../assets/medias/${media.photographerId}/${media.image}" alt="${media.title}">        
            <div class='figcaption-container'>
            <figcaption>${media.title}</figcaption>
            <p class='media-likes-count'>${media.likes} </p>
            <img src='../assets/icons/heart.svg' class='heart-icon' alt='heart'>
            </div>
        </figure>
        `
    } else {
      return `<figure>   
      <video class=" media-card media-video" width="300" height="300" src="../assets/medias/${media.photographerId}/${media.video}" alt=${media.title} >
          <source  src="../assets/medias/${media.photographerId}/${media.video}" type="video/mp4">
          Your browser does not support the video tag.
      </video>
      <div class='figcaption-container'>
      <figcaption>${media.title}</figcaption>
      <p class='media-likes-count'>${media.likes} </p>
      <img src='../assets/icons/heart.svg' class='heart-icon' alt='heart'>
      </div>
      </figure>
      `
    }
  }

  display() {
    this.mediaContainer.innerHTML = ''
    this.medias.forEach((media) => {
      this.mediaContainer.innerHTML += this.buildDom(media)
    })
  }
}

export default Sort
