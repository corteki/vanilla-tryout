import { TileItemView } from "./modules/tile-item/TileItemView.js"
import { TileItemModule } from "./modules/tile-item/TileItemModule.js";

export class ProductTileView {

    children = [];

    constructor(name) {
        this.view = document.querySelector(`.${name}`)
        this.init();
    }
    
    init = () => {
        const productTiles = this.view.querySelectorAll(".product-tile");
        productTiles.forEach(productTile => {
            const tileItemController = TileItemModule(productTile.id);
            this.children.push(tileItemController.view)
        });
    }

    update = (tiles) => {
        this.children.forEach(child => {
            const tile = tiles.find(tile => tile.id = child.view.id);
            child.update(tile)
        });
    }

    loadTilesOnClick = (handler) => {
        this.view.addEventListener('click', (e) => {
            e.stopPropagation();
            handler();
        });
    }

}
