import { PhotographerModel} from './models/photographer.model.js'
import { PhotographerView} from './views/photographer.view.js'
import { PhotographerController} from './controllers/photographer.controller.js'

function main() {
    const model = new PhotographerModel();
    const controller = new PhotographerController(model)
    const view = new PhotographerView(controller)
}

main()