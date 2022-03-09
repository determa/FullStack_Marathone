const {EatException} = require("./eat-exception");

exports.Ingestion = class {
    meal_type = ['breakfast', 'lunch', 'dinner'];
    products = [];
    constructor(type, day_of_diet, id) {
        this.day_of_diet = day_of_diet;
        this.type = type;
        this.id = id;
    }

    setProduct(product) {
        this.products.push(product);
    }

    getProductInfo(productName) {
        let result;
        this.products.forEach(item => {
            if (item.name == productName)
                result = item;
        });
        result.type = this.type;
        return result;
    }

    getFromFridge(productName) {
        let product = this.getProductInfo(productName);
        EatException(product);
    }
}