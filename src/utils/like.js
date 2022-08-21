class Like {
  constructor(id, mediaLikesCount) {
    this.id = id
    this.heartIcon = document.querySelector(`[data-id="${this.id}"]`)
    this.mediaLikesCount = mediaLikesCount
  }

  static init() {
    const heartIcons = document.querySelectorAll('.heart-icon')
    heartIcons.forEach((heartIcon) => {
      const parent = heartIcon.parentElement
      const mediaLikesCount = parent.querySelector('.media-likes-count')
      heartIcon.addEventListener('click', (e) => {
        e.preventDefault()
        Like.like(mediaLikesCount, heartIcon)
      })
      heartIcon.addEventListener('keydown', (e) => {
        if (e.key == 'Enter') {
          e.preventDefault()
          Like.like(mediaLikesCount, heartIcon)
        }
      })
    })
  }

  static like(mediaLikesCount, heartIcon) {
    const likesCount = document.querySelector('.likes-count')
    if (heartIcon.classList.contains('liked')) {
      likesCount.innerHTML = parseInt(likesCount.innerHTML) - 1
      mediaLikesCount.innerHTML = parseInt(mediaLikesCount.innerHTML) - 1
      heartIcon.classList.remove('liked')
      heartIcon.classList.remove('blue')
    } else {
      likesCount.innerHTML = parseInt(likesCount.innerHTML) + 1
      mediaLikesCount.innerHTML = parseInt(mediaLikesCount.innerHTML) + 1
      heartIcon.classList.add('liked')
      heartIcon.classList.add('blue')
    }
  }
}

export default Like
