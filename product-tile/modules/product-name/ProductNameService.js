import { ViewModel } from "../../../core/ViewModel.js";

export class ProductNameViewModel extends ViewModel {

    constructor() {
        super();
    }

    changeName = () => {
        this.update("changed name");
    }

}