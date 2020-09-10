import { Controller } from "../../../core/Controller.js";

export class ProductNameController extends Controller {

    constructor(view, viewModel) {
        super(view, viewModel);
        this.init();
    }

    init = () => {
        this.view.handleClick(this.changeName);
    }

    changeName = () => {
        this.viewModel.changeName();
    }
}