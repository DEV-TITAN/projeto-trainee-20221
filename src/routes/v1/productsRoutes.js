const { Router } = require("express");
const ProductController = require("../../controllers/ProductController");
const CreateProductService = require("../../services/CreateProductService");
const ListProductsService = require("../../services/ListProductsService");
const JSONProductRepository = require("../../repositories/JSONProductRepository");

const router = Router();

router.post("/", async (req, res) => {
    const productRepository = new JSONProductRepository();

    const createProductService = new CreateProductService(productRepository);
    const listProductsService = new ListProductsService(productRepository);

    const productController = new ProductController(
        createProductService,
        listProductsService
    );

    await productController.create(req, res);
});

router.get("/", async (req, res) => {
    const productRepository = new JSONProductRepository();

    const createProductService = new CreateProductService(productRepository);
    const listProductsService = new ListProductsService(productRepository);

    const productController = new ProductController(
        createProductService,
        listProductsService
    );

    await productController.index(req, res);
});

module.exports = router;
