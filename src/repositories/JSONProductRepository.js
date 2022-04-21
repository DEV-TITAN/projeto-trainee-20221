const path = require("path");
const fs = require("fs");
const Product = require("../models/Product");

const DB_PATH = path.join(__dirname, "../database/database.json");

class ProductRepository {
    async create(name, price, stock) {
        const rawDb = await fs.promises.readFile(DB_PATH, "utf-8");
        const parsedDb = JSON.parse(rawDb);

        const product = Product.create({name, price, stock});

        parsedDb.products.push(product);

        await fs.promises.writeFile(DB_PATH, JSON.stringify(parsedDb, null, 4));

        return product;
    }

    async findAll() {
        const rawDb = await fs.promises.readFile(DB_PATH, "utf-8");
        const parsedDb = JSON.parse(rawDb);

        return parsedDb.products;
    }

    async findByName(name) {
        const rawDb = await fs.promises.readFile(DB_PATH, "utf-8");
        const parsedDb = JSON.parse(rawDb);

        const foundProduct = parsedDb.products.find(product => product.name === name);

        return foundProduct;
    }

    async findById(productId) {
        const rawDb = await fs.promises.readFile(DB_PATH, "utf-8");
        const parsedDb = JSON.parse(rawDb);

        const foundProduct = parsedDb.products.find(product => product.id === productId);

        return foundProduct;
    }

    async update(productId, name, price, stock) {
        const rawDb = await fs.promises.readFile(DB_PATH, "utf-8");
        const parsedDb = JSON.parse(rawDb);

        const foundProduct = parsedDb.products.find(product => product.id === productId);

        Object.assign(foundProduct, {
            name,
            price,
            stock
        });

        await fs.promises.writeFile(DB_PATH, JSON.stringify(parsedDb, null, 4));

        return foundProduct;
    }
}

module.exports = ProductRepository;
