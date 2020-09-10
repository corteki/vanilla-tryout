export class Controller {
    constructor(view, viewModel) {
        this.view = view;
        this.viewModel = viewModel;
        this.viewModel.bindUpdate(this.update); 
    }

    update = (model = {}) => {
        this.view.update(model);
    }
}