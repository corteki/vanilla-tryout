import { BaseService } from "../../../core/BaseService.js";

export class AddToBasketService extends BaseService {

    constructor() {
        super();
    }

    addToBasket = () => {
        this.update();
    }

}
