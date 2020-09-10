import { ViewModel } from "../../../core/ViewModel.js";

export class AddToBasketViewModel extends ViewModel {

    constructor() {
        super();
    }

    addToBasket = () => {
        this.update();
    }

}
