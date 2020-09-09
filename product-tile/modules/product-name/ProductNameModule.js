import { ProductNameView } from "./ProductNameView.js"
import { ProductNameService } from "./ProductNameService.js";
import { ProductNameController } from "./ProductNameController.js";

export const ProductNameModule = () => {
    const view = new ProductNameView("product-tile__text", "product-name");
    const service = new ProductNameService();
    return new ProductNameController(view, service);
}