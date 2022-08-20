class Lightbox {
  static init() {
    const links = Array.from(
      document.querySelectorAll(
        'img:not(.logo):not(.heading-image):not(.close):not(.heart):not(.heart-icon), video'
      )
    )
    console.log(links)
    const gallery = links.map((link) => link.getAttribute('src'))
    console.log(gallery)
    const alts = links.map((link) => link.getAttribute('alt'))

    links.forEach((link) =>
      link.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(link)
        new Lightbox(
          e.currentTarget.getAttribute('src'),
          gallery,
          alts,
          e.currentTarget.getAttribute('alt'),
          alts
        )
      })
    )
  }

  constructor(url, gallery, alts, alt) {
    this.element = this.buildDOM(url)
    this.gallery = gallery
    this.alts = alts
    if (url.endsWith('.mp4')) {
      this.loadVideo(url, alt)
    } else {
      this.loadImage(url, alt)
    }
    this.onKeyUp = this.onKeyUp.bind(this)
    document.body.appendChild(this.element)
    document.addEventListener('keyup', this.onKeyUp)
  }

  loadImage(url, alt) {
    this.alt = alt
    this.url = null
    const image = new Image()
    const container = this.element.querySelector('.lightbox__container')
    const loader = document.createElement('div')
    const caption = document.createElement('h2')
    const figContainer = document.createElement('div')
    figContainer.appendChild(image)
    caption.classList.add('lightbox__caption')
    figContainer.appendChild(caption)
    caption.innerHTML = this.alt
    loader.classList.add('lightbox__loader')
    container.innerHTML = ''
    container.appendChild(loader)
    console.log(url)
    image.onload = () => {
      container.removeChild(loader)
      container.appendChild(figContainer)
      this.url = url
      this.alt = alt
    }
    image.src = url
    image.alt = ""
  }

  loadVideo(url, alt) {
    this.alt = alt
    this.url = null
    console.log(this.alt)
    const video = document.createElement('video')
    const container = this.element.querySelector('.lightbox__container')
    const loader = document.createElement('div')
    const caption = document.createElement('p')
    caption.classList.add('lightbox__caption')
    const figContainer = document.createElement('div')
    figContainer.appendChild(video)
    figContainer.appendChild(caption)
    caption.innerHTML = this.alt
    loader.classList.add('lightbox__loader')
    container.innerHTML = ''
    container.appendChild(loader)
    const refresher = () => {
      container.replaceChildren(figContainer)
      this.alt = alt
      this.url = url
    }
    video.onloadeddata = refresher
    video.setAttribute('src', url)
    video.setAttribute('controls', true)
    video.setAttribute('autoplay', true)
    video.setAttribute('loop', true)
    video.setAttribute('muted', true)
    video.setAttribute('playsinline', true)
    video.setAttribute('preload', 'auto')
    video.setAttribute('webkit-playsinline', true)
    video.setAttribute('alt', alt)
    this.url = url
    video.src = url
    video.alt = ""
    video.innerHTML = `<source src="${url}" type="video/mp4">`
  }

  next(e) {
    e.preventDefault()
    console.log(this.gallery)
    let i = this.gallery.findIndex((image) => image === this.url)

    if (i === this.gallery.length - 1) {
      i = -1
    }

    if (this.gallery[i + 1].endsWith('.mp4')) {
      this.loadVideo(this.gallery[i + 1], this.alts[i + 1])
    } else {
      this.loadImage(this.gallery[i + 1], this.alts[i + 1])
    }
    console.log(i)
  }

  prev(e) {
    e.preventDefault()
    console.log(this.gallery)
    let i = this.gallery.findIndex((image) => image === this.url)
    if (i === 0) {
      i = this.gallery.length
    }
    if (this.gallery[i - 1].endsWith('.mp4')) {
      this.loadVideo(this.gallery[i - 1], this.alts[i - 1])
    } else {
      this.loadImage(this.gallery[i - 1], this.alts[i - 1])
    }
  }

  onKeyUp(e) {
    switch (e.key) {
      case 'Escape':
        this.close(e)
        break
      case 'ArrowLeft':
        this.prev(e)
        break
      case 'ArrowRight':
        this.next(e)
    }
  }

  close(e) {
    e.preventDefault()
    this.element.classList.add('fadeOut')
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element)
    }, 500)
    document.removeEventListener('keyup', this.onKeyUp)
  }

  buildDOM(url) {
    const dom = document.createElement('div')
    dom.classList.add('lightbox')

    dom.setAttribute('aria-label', 'image closeup view')

    dom.innerHTML = `
            <button class="lightbox__close">Fermer</button>
            <button class="lightbox__next">Suivant</button>
            <button class="lightbox__prev">Précédent</button>
            <div class="lightbox__container">
            </div>`
    dom
      .querySelector('.lightbox__close')
      .addEventListener('click', this.close.bind(this))

    dom
      .querySelector('.lightbox__next')
      .addEventListener('click', this.next.bind(this))
    dom
      .querySelector('.lightbox__prev')
      .addEventListener('click', this.prev.bind(this))
    return dom
  }
}

export default Lightbox
