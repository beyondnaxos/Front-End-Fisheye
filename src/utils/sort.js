// import heart.svg

class Sort {
  static init(sortValue, mediasFromView) {
    const mediaContainer = document.querySelector('.medias-container')
    const medias = mediasFromView
    const property = sortValue
    const sort = new Sort(medias, property, mediaContainer)
    sort.sortBy(property)
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
      return `<figure aria-label='figure de ${media.title}' aria-hidden='false' role="figure" aria-label=${media.title} tabindex='-1'>
    
            <img  tabindex='1' id=${media.title} aria-label='ouverture de la lightbox' height='300' width='350' class="media-card media-image" src="../assets/medias/${media.photographerId}/${media.image}" alt="${media.title}" muted>      
            <div class='figcaption-container'>
            <figcaption tabindex='-1' aria-label='titre de la photo ${media.title}'>${media.title}</figcaption>
            <h4 tabindex='1' class='media-likes-count' aria-label='nombre de likes ${media.likes}'>${media.likes} </h4>
            <img tabindex='1' src='../assets/icons/heart.svg' aria-label='bouton ajouter un like' class='heart-icon' alt='heart'>
            </div>
        </figure>
        `
    } else {
      return `<figure aria-label='figure de ${media.title}' aria-hidden='false' role="figure" aria-label=${media.title} tabindex='-1'>   
      <video  tabindex='1' id=${media.title} aria-label='ouverture de la lightbox' height='300' width='350' class=" media-card media-video" width="300" height="300" src="../assets/medias/${media.photographerId}/${media.video}" alt=${media.title} muted>
          <source  src="../assets/medias/${media.photographerId}/${media.video}" type="video/mp4">
          Your browser does not support the video tag.
      </video>
      <div class='figcaption-container'>
      <figcaption tabindex='-1' aria-label='titre de la vidéo ${media.title}'>${media.title}</figcaption>
      <h4 tabindex='1' class='media-likes-count' aria-label='nombre de likes ${media.likes}' >${media.likes} </h4>
      <img tabindex='1' src='../assets/icons/heart.svg' class='heart-icon' aria-label='bouton ajouter un like' alt='heart'>
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
