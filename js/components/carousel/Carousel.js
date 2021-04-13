class Carousel {
    constructor (data) {
        this.selector = data.selector;
        this.imgPath = data.imgPath;    //not sure, ar reikes, nes pas mus SVG ikonos, o ne imgs
        this.list = data.list; 
    
        this.DOM = null;
    }
    init() {
        //patikrinti, ar validus selectorius, jei taip, issisaugoti kur jo vieta (DOM kintamajame)
        //patikrinti, ar validus imgPath, jei mums jo reikes
        //patikrinti, ar validus list
        //render with JS
    }
}

export { Carousel }