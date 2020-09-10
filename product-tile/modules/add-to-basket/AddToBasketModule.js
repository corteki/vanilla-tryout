import { AddToBasketView } from "./AddToBasketView.js"
import { AddToBasketViewModel } from "./AddToBasketService.js";
import { AddToBasketController } from "./AddToBasketController.js";

export const AddToBasketModule = () => {
    const view = new AddToBasketView("add-to-basket");
    const viewModel = new AddToBasketViewModel();
    return new AddToBasketController(view, viewModel);
}
