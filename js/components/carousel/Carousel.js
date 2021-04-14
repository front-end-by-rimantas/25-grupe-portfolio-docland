class Carousel {
    constructor (data) {
        this.selector = data.selector;
        this.imgPath = data.imgPath;    //not sure, ar reikes, nes pas mus SVG ikonos, o ne imgs
        this.list = data.list; 
    
        this.DOM = null;
    }
    init() {
        //patikrinti, ar validus selectorius, jei taip, issisaugoti kur jo vieta (DOM kintamajame)
        if (!this.isValidSelector()) {
            return 'The selector is invalid';
        }
        //patikrinti, ar validus imgPath, jei mums jo reikes
        if (!this.isValidImgPath()) {
            return 'The provided image path is invalid';
        }
        //patikrinti, ar validus list
        if (!this.isValidList ()) {
            return 'Provided list has invalid components';
        }
        //render with JS
        this.render();
    }

    isValidSelector () {
        const DOM = document.querySelector(this.selector);
        //jei DOM neegzistuoja, return false
        if (!DOM) {
            return false;
        }
        //jei randa DOM, issaugoti jo vieta
        this.DOM = DOM;
        return true;
    }

    isValidImgPath () {
        if (typeof this.imgPath !== 'string' || this.imgPath === '') {
            return false;
        }
        return true;
    }

    isValidList () {
        if (!Array.isArray(this.list) || this.list.length === 0 ) {
            return false;
        }
        return true;
    }
    render () {
        const HTML = 'BUTTONS + LIST'
    }
    renderButtons() {

    }
    renderList () {
        let HTML = '';

        for (const item of this.list) {
            HTML += `<div> CAROUSEL ITEM </div>`
        }
        return HTML;
    }
    isValidListItem(item) {
        return true;
    }
}

export { Carousel }