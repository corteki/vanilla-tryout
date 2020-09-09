import { BaseController } from "../../../core/BaseController.js";

export class AddToBasketController extends BaseController {

    constructor(view, service) {
        super(view, service);
        this.init();
    }

    init = () => {
        this.view.handleClick(this.addToBasket);
    }

    addToBasket = () => {
        this.service.addToBasket();
    }

}
