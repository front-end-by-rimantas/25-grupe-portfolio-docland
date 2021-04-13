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
    }
    isValidSelector () {

    }
    isValidImgPath () {

    }
    isValidList () {

    }
}

export { Carousel }