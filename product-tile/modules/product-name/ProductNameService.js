import { BaseService } from "../../../core/BaseService.js";

export class ProductNameService extends BaseService {

    constructor() {
        super();
    }

    changeName = () => {
        this.update("changed name");
    }

}