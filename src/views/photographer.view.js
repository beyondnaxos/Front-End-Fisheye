import factory from '../factories/media.js'

class PhotographerView {
  constructor() {
    this.main = document.getElementById('main')

    this.heading = document.querySelector('.photograph-header')
    this.headingInfosContainer = document.querySelector(
      '.heading-infos-container'
    )
    this.headingTitle = document.querySelector('.heading-name')
    this.headingText = document.querySelector('.heading-text')
    this.headingSubText = document.querySelector('.heading-sub')
    this.headingImg = document.querySelector('.heading-image')
    this.sortContainer = document.querySelector('.sort-container')

    this.inputLabel = document.createElement('label')
    this.inputLabel.setAttribute('for', 'sort-select')
    this.inputLabel.setAttribute('aria-aria-labelledby', 'trier-par')
    this.inputSelect = document.createElement('select')
    this.inputSelect.setAttribute('id', 'sort-select')
    this.inputOptionFirst = document.createElement('option')
    this.inputOptionSecond = document.createElement('option')
    this.inputOptionThird = document.createElement('option')

    this.mediasContainer = document.querySelector('.medias-container')
    this.mediaCard = document.createElement('article')
    this.mediaCard.classList.add('media-card')
    this.mediaImg = document.createElement('img')
    this.mediaImg.classList.add('media-img')
    this.mediaVideo = document.createElement('video')
    this.mediaVideo.classList.add('media-video')

    this.mediaTitle = document.createElement('h2')
    this.mediaTitle.classList.add('media-title')
  }

  displayPhotographerInfo(photographer) {
    this.headingTitle.innerText = photographer.name
    this.headingText.innerText = photographer.city + ', ' + photographer.country
    this.headingSubText.innerText = photographer.tagline

    this.headingImg.setAttribute(
      'src',
      `../../assets/photographers/${photographer.portrait}`
    )

    this.headingImg.setAttribute('alt', photographer.name)
    this.headingImg.classList.add('photographer-img')
    this.inputLabel.innerText = 'Trier par'
    this.inputLabel.setAttribute('aria-aria-labelledby', 'trier-par')
    this.inputLabel.classList.add('sort-label')
    this.inputOptionFirst.innerText = 'Popularité'
    this.inputOptionFirst.setAttribute('value', 'popularity')
    this.inputOptionFirst.classList.add('popularité')
    this.inputOptionSecond.innerText = 'Date'
    this.inputOptionSecond.setAttribute('value', 'date')
    this.inputOptionThird.innerText = 'Prix'
    this.inputOptionThird.setAttribute('value', 'price')
    this.inputSelect.appendChild(this.inputOptionFirst)
    this.inputSelect.appendChild(this.inputOptionSecond)
    this.inputSelect.appendChild(this.inputOptionThird)
    this.inputSelect.setAttribute('tabindex', '1')

    this.headingInfosContainer.appendChild(this.headingTitle)
    this.headingInfosContainer.appendChild(this.headingText)
    this.headingInfosContainer.appendChild(this.headingSubText)
    this.heading.appendChild(this.headingImg)
    this.sortContainer.appendChild(this.inputLabel)
    this.sortContainer.appendChild(this.inputSelect)

    this.inputSelect.appendChild(this.inputOptionFirst)
    this.inputSelect.appendChild(this.inputOptionSecond)
    this.inputSelect.appendChild(this.inputOptionThird)
  }

  displayMedia(photographer) {
    this.photographer = photographer

    this.photographer.medias.map((media) => {
      this.mediaCard.setAttribute(
        'onclick',
        `location.href='media.html?id=${media.id}'`
      )
      // heartIcon.setAttribute('contenteditable', 'false')

      const multimedia = factory(media)

      this.mediasContainer.innerHTML += multimedia.displayInList()
    })
  }

  displayLikes(photographer) {
    this.photographer = photographer
    this.totalLikes = photographer.totalLikes

    this.countContainer = document.querySelector('.count-container')
    this.likes = document.querySelector('.likes')
    this.likesCount = document.querySelector('.likes-count')
    this.dailyPrice = document.querySelector('.daily-price')
    this.likesCount.innerHTML = `${this.totalLikes}`
    this.likesCount.setAttribute('aria-label', this.totalLikes + 'Likes')
    this.dailyPrice.textContent = `${photographer.price}€ / jour`
    this.dailyPrice.setAttribute('aria-label', photographer.price+ '€ / jour')

    this.countContainer.appendChild(this.likes)
    this.likes.appendChild(this.likesCount)

    this.countContainer.appendChild(this.dailyPrice)
    this.headingInfosContainer.appendChild(this.countContainer)
  }
}

export default PhotographerView
