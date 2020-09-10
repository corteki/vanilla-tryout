import { Controller } from "../core/Controller.js";

export class ProductTileController extends Controller {

    constructor(view, viewModel) {
        super(view, viewModel);
        this.init();
    }

    init = () => {
        this.view.loadTilesOnClick(this.getTiles);
    }

    getTiles = () => {
        this.viewModel.getTiles();
    }

}
