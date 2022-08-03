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
    Sort.init()
  }

  baseDisplay(model)

  console.log(model.medias);

  
  
  console.log('clg de model');
}

export default PhotographerController;
