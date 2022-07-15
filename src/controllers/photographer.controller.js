   const  PhotographerController = async (model, view) => {

    await model.getPhotographer();

    console.log(model);

    view.displayPhotographerInfo(model)
    view.displayMedia(model)
  }

  export default PhotographerController;