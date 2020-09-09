import { ProductTileModel } from "./ProductTileModel.js";
import { BaseService } from "../core/BaseService.js";

export class ProductTileService extends BaseService {

    constructor() {
        super();
    }

    getTiles = () => {
        this.tiles = [new ProductTileModel("my-unique-id", "my tile", "my brand", "10", "2")];
        this.update(this.tiles);
    }

}
