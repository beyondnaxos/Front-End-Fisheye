class Like {
  constructor(id, mediaLikesCount) {
    this.id = id
    this.heartIcon = document.querySelector(`[data-id="${this.id}"]`)
    this.mediaLikesCount = mediaLikesCount
    this.liked = false
  }

  static init() {
    const heartIcons = document.querySelectorAll('.heart-icon')

    heartIcons.forEach((heartIcon) => {
      heartIcon.addEventListener('click', (e) => {
        e.preventDefault()
        const parent = heartIcon.parentElement
        const mediaLikesCount = parent.querySelector('.media-likes-count')
        console.log(heartIcon)
        Like.like(mediaLikesCount)
      })
    })
  }

  static like(mediaLikesCount) {
    if (this.liked === true) {
      const likesCount = document.querySelector('.likes-count')
      likesCount.innerHTML = parseInt(likesCount.innerHTML) - 1
      mediaLikesCount.innerHTML = parseInt(mediaLikesCount.innerHTML) - 1
      this.liked = false
    } else {
      const likesCount = document.querySelector('.likes-count')
      likesCount.innerHTML = parseInt(likesCount.innerHTML) + 1
      mediaLikesCount.innerHTML = parseInt(mediaLikesCount.innerHTML) + 1
      this.liked = true
    }
  }
}

export default Like
