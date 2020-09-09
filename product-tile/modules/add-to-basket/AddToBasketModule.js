import { AddToBasketView } from "./AddToBasketView.js"
import { AddToBasketService } from "./AddToBasketService.js";
import { AddToBasketController } from "./AddToBasketController.js";

export const AddToBasketModule = () => {
    const view = new AddToBasketView("add-to-basket");
    const service = new AddToBasketService();
    return new AddToBasketController(view, service);
}
