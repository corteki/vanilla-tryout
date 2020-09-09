import { ProductTileView } from "./ProductTileView.js";
import { ProductTileService } from "./ProductTileService.js";
import { ProductTileController } from "./ProductTileController.js";

export const ProductTileModule = () => {
    const view = new ProductTileView('assortiment');
    const service = new ProductTileService();
    return new ProductTileController(view, service);
}