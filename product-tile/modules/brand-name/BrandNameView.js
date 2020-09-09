export class BrandNameView {

    constructor(parent) {
        this.view = document.querySelector(`.${parent} .brand-name`);
    }

    update = (brandName) => {
        this.view.textContent = brandName;
    }

}
