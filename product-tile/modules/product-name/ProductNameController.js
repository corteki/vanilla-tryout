import { BaseController } from "../../../core/BaseController.js";

export class ProductNameController extends BaseController {

    constructor(view, service) {
        super(view, service);
        this.init();
    }

    init = () => {
        this.view.handleClick(this.changeName);
    }

    changeName = () => {
        this.service.changeName();
    }
}