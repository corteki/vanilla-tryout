import { ProductNameView } from "./ProductNameView.js"
import { ProductNameViewModel } from "./ProductNameService.js";
import { ProductNameController } from "./ProductNameController.js";

export const ProductNameModule = () => {
    const view = new ProductNameView("product-tile__text", "product-name");
    const viewModel = new ProductNameViewModel();
    return new ProductNameController(view, viewModel);
}