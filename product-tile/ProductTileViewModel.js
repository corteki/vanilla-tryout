import { ProductTileModel } from "./ProductTileModel.js";
import { ViewModel } from "../core/ViewModel.js";

export class ProductTileViewModel extends ViewModel {

    constructor() {
        super();
    }

    getTiles = () => {
        this.tiles = [new ProductTileModel("my-unique-id", "my tile", "my brand", "10", "2")];
        this.update(this.tiles);
    }

}
