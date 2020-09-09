export class AddToBasketView {

    constructor(name) {
        this.view = document.querySelector(`.${name}`);
    }

    handleClick = (handler) => {
        this.view.addEventListener('click', (e) => {
            e.stopPropagation();
            handler();
        });
    }

    update = () => {
        console.log('hey')
    }
    
}