class PhotographerView {
    constructor(controller) {
      this.controller = controller;
      this.heading = document.getElementById("heading");
      this.heading.innerText = controller.modelHeading;
      this.heading.addEventListener("click", controller);
    }
  }
  
  export { PhotographerView };
  