export class BaseController {
    constructor(view, service) {
        this.view = view;
        this.service = service;
        this.service.bindUpdate(this.update); 
    }

    update = (model = {}) => {
        this.view.update(model);
    }
}