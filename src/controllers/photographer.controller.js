import Lightbox from '../utils/lightbox.js'
import Sort from '../utils/sort.js';

const PhotographerController = async (model, view) => {

  await model.getPhotographer();
  console.log(model);

  view.displayPhotographerInfo(model)

  const baseDisplay = (model) => {
    view.displayMedia(model)
    view.displayLikes(model)
    Lightbox.init()
  }

  baseDisplay(model)

  console.log(model.medias);

  view.inputSelect.addEventListener("change", function (e) {
    Sort.init(e, model.medias)
    Lightbox.init()
  }
  )
  
  console.log('clg de model');
}

export default PhotographerController;
