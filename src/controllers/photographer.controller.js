import Lightbox from '../utils/lightbox.js'
import Sort from '../utils/sort.js'
import Like from '../utils/like.js'

const PhotographerController = async (model, view) => {
  await model.getPhotographer()

  view.displayPhotographerInfo(model)

  const baseDisplay = (model) => {
    view.displayMedia(model)
    view.displayLikes(model)
    Sort.init('popularity', model.medias)
    Lightbox.init()
    Like.init()
  }

  baseDisplay(model)

  view.inputSelect.addEventListener('change', function (e) {
    Sort.init(e.target.value, model.medias)
    Lightbox.init()
    Like.init()
  })
}

export default PhotographerController
