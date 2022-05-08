const fs = require("fs");
const Product = require("../models/Product");
const {DB_PATH} = require("../config/database");

class ProductRepository {
    constructor(db) {
        this.__db = db.getClient();
    }

    async create(name, price, stock) {
        const product = new Product({name, price, stock});

        this.__db.products.push(product);

        await fs.promises.writeFile(DB_PATH, JSON.stringify(this.__db, null, 4));

        return product;
    }

    async findAll() {
        return this.__db.products;
    }

    async findByName(name) {
        const foundProduct = this.__db.products.find(product => product.name === name);

        return foundProduct ?? null;
    }

    async findById(productId) {
        const foundProduct = this.__db.products.find(product => product.id === productId);

        return foundProduct ?? null;
    }

    async update(productId, {name, price, stock}) {
        const foundProduct = await this.findById(productId);

        if (foundProduct) {
            Object.assign(foundProduct, {
                name,
                price,
                stock
            });
        }

        const idx = this.__db.products.findIndex(product => product.id === productId);
        this.__db.products[idx] = foundProduct;

        await fs.promises.writeFile(DB_PATH, JSON.stringify(this.__db, null, 4));

        return foundProduct;
    }

    async delete(productId) {
        const products = this.__db.products;
        const productIdx = products.findIndex(product => product.id === productId);

        products.splice(productIdx, 1);

        await fs.promises.writeFile(DB_PATH, JSON.stringify(this.__db, null, 4));
    }
}

module.exports = ProductRepository;
