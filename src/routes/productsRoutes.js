const { Router } = require("express");
const ProductControllerFactory = require("../factories/ProductControllerFactory");

const router = Router();

router.post("/create-product", async (req, res) => {
    const productControllerFactory = new ProductControllerFactory();
    const productController = productControllerFactory.getProductController();
    await productController.createProduct(req, res);
});

router.get("/create", (req, res) => {
    const productControllerFactory = new ProductControllerFactory();
    const productController = productControllerFactory.getProductController();
    productController.create(req, res);
});

router.get(["/index", "/"], async (req, res) => {
    const productControllerFactory = new ProductControllerFactory();
    const productController = productControllerFactory.getProductController();
    await productController.index(req, res);
});

router.get("/show/:productId", async (req, res) => {
    const productControllerFactory = new ProductControllerFactory();
    const productController = productControllerFactory.getProductController();
    await productController.show(req, res);
});

router.get("/update/:productId", async (req, res) => {
    const productControllerFactory = new ProductControllerFactory();
    const productController = productControllerFactory.getProductController();
    await productController.update(req, res);
});

router.post("/update-product/:productId", async (req, res) => {
    const productControllerFactory = new ProductControllerFactory();
    const productController = productControllerFactory.getProductController();
    await productController.updateProduct(req, res);
});

router.get("/delete/:productId", async (req, res) => {
    const productControllerFactory = new ProductControllerFactory();
    const productController = productControllerFactory.getProductController();
    await productController.delete(req, res);
});

module.exports = router;
