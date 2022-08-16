class Like {

  static init() {
    const heartIcons = document.querySelectorAll('.heart-icon')
    heartIcons.forEach((heartIcon) => {
      heartIcon.addEventListener('click', (e) => {
        e.preventDefault()
        const parent = heartIcon.parentElement
        const mediaLikesCount = parent.querySelector('.media-likes-count')
        // const getLikesCount = mediaLikesCount.innerHTML
        Like.like(
          mediaLikesCount
        )
      })
    })
  }

  constructor(id, mediaLikesCount) {
    this.id = id
    this.heartIcon = document.querySelector(`[data-id="${this.id}"]`)
    // select the good medialikecount element to update it
    this.mediaLikesCount = mediaLikesCount
  }

  static like( mediaLikesCount) {
    const likesCount = document.querySelector('.likes-count')
    likesCount.innerHTML = parseInt(likesCount.innerHTML) + 1
    mediaLikesCount.innerHTML = parseInt(mediaLikesCount.innerHTML) + 1
  }

}

export default Like
