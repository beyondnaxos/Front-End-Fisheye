   const  PhotographerController = async (model, view) => {

    await model.getPhotographer();

    console.log(model);

    view.displayPhotographerInfo(model)
    view.displayMedia(model)
    view.displayLikes(model)
    
  }

  export default PhotographerController;