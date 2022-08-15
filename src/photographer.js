import PhotographerModel from './models/photographer.model.js'
import PhotographerView from './views/photographer.view.js'
import PhotographerController from './controllers/photographer.controller.js'

function main() {
  const idPhotographer = parseInt(window.location.search.split('=')[1])
  const model = new PhotographerModel(idPhotographer)
  const view = new PhotographerView()
  const controller = PhotographerController(model, view)
}

main()
