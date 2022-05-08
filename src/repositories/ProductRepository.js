const fs = require("fs");
const Product = require("../models/Product");
const {DB_PATH} = require("../config/database");
const Repository = require("./Repository");

class ProductRepository extends Repository {
    constructor(db) {
        super(db);
    }

    async create(name, price, stock) {
        const product = new Product({name, price, stock});

        this._db.products.push(product);

        await fs.promises.writeFile(DB_PATH, JSON.stringify(this._db, null, 4));

        return product;
    }

    async findAll() {
        return this._db.products;
    }

    async findByName(name) {
        const foundProduct = this._db.products.find(product => product.name === name);

        return foundProduct ?? null;
    }

    async findById(productId) {
        const foundProduct = this._db.products.find(product => product.id === productId);

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

        const idx = this._db.products.findIndex(product => product.id === productId);
        this._db.products[idx] = foundProduct;

        await fs.promises.writeFile(DB_PATH, JSON.stringify(this._db, null, 4));

        return foundProduct;
    }

    async delete(productId) {
        const products = this._db.products;
        const productIdx = products.findIndex(product => product.id === productId);

        products.splice(productIdx, 1);

        await fs.promises.writeFile(DB_PATH, JSON.stringify(this._db, null, 4));
    }
}

module.exports = ProductRepository;
