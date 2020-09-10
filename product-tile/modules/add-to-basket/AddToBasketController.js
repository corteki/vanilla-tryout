import { Controller } from "../../../core/Controller.js";

export class AddToBasketController extends Controller {

    constructor(view, viewModel) {
        super(view, viewModel);
        this.init();
    }

    init = () => {
        this.view.handleClick(this.addToBasket);
    }

    addToBasket = () => {
        this.viewModel.addToBasket();
    }

}
