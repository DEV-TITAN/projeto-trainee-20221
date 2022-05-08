const crypto = require("crypto");

class Product {
    constructor({name, price = 0, stock = 0}) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}

module.exports = Product;
