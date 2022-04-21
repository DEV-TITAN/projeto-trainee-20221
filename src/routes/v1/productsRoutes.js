const { Router } = require("express");
const ProductController = require("../../controllers/ProductController");
const CreateProductService = require("../../services/CreateProductService");
const JSONProductRepository = require("../../repositories/JSONProductRepository");

const router = Router();
router.post("/", async (req, res) => {
    const productRepository = new JSONProductRepository();

    const createProductService = new CreateProductService(productRepository);

    const productController = new ProductController(
        createProductService,
    );

    await productController.create(req, res);
});

module.exports = router;
