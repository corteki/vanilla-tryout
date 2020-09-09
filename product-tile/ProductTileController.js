import { BaseController } from "../core/BaseController.js";

export class ProductTileController extends BaseController {

    constructor(view, service) {
        super(view, service);
        this.init();
    }

    init = () => {
        this.view.loadTilesOnClick(this.getTiles);
    }

    getTiles = () => {
        this.service.getTiles();
    }

}
