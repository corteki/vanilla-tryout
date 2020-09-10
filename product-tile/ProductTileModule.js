import { ProductTileView } from "./ProductTileView.js";
import { ProductTileViewModel } from "./ProductTileViewModel.js";
import { ProductTileController } from "./ProductTileController.js";

export const ProductTileModule = () => {
    const view = new ProductTileView('assortiment');
    const viewModel = new ProductTileViewModel();
    return new ProductTileController(view, viewModel);
}