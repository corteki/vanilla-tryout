export class ProductNameView {

    constructor(parent, name) {
        this.view = document.querySelector(`.${parent} .${name}`);
    }

    update = (productName) => {
        this.view.textContent = productName;
    }

    handleClick = (handler) => {
        this.view.addEventListener('click', (e) => {
            e.stopPropagation();
            handler();
        })
    }
}
