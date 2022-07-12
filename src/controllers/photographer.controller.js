   const  PhotographerController = async (model, view) => {

    await model.getPhotographer();

    view.displayPhotographerInfo(model)

  }

  export default PhotographerController;