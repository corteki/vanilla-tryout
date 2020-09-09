import { BrandNameView } from "../brand-name/BrandNameView.js";
import { IconView } from "../icon/IconView.js";
import { ImageView } from "../image/ImageView.js";
import { BasePriceView } from "../base-price/BasePriceView.js";
import { VolPriceView } from "../vol-price/VolPriceView.js";
import { AddToBasketModule } from "../add-to-basket/AddToBasketModule.js";
import { ProductNameModule } from "../product-name/ProductNameModule.js";

export class TileItemView {

    children = {}

    constructor(id) {
        this.view = document.getElementById(id);
        this.init();
    }

    init = () => {
        const addToBasketController = AddToBasketModule();
        const productNameController = ProductNameModule();
        this.children = {
            icon: new IconView(),
            image: new ImageView(),
            productName: productNameController.view,
            brandName: new BrandNameView('product-tile__text'),
            basePrice: new BasePriceView(),
            volPrice: new VolPriceView(),
            addToBasket: addToBasketController.view
        }
    }

    update = (tile) => {
        this.children.productName.update(tile.productName);
        this.children.brandName.update(tile.brandName);
    }
    
}