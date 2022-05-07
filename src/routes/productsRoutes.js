const { Router } = require("express");
const {productController} = require("../modules/productModule");

const router = Router();

router.post("/create-product", async (req, res) => {
    await productController.createProduct(req, res);
});

router.get("/create", (req, res) => {
    productController.create(req, res);
});

router.get(["/index", "/"], async (req, res) => {
    await productController.index(req, res);
});

router.get("/show/:productId", async (req, res) => {
    await productController.show(req, res);
});

router.get("/update/:productId", async (req, res) => {
    await productController.update(req, res);
});

router.post("/update-product/:productId", async (req, res) => {
    await productController.updateProduct(req, res);
});

router.get("/delete/:productId", async (req, res) => {
    await productController.delete(req, res);
});

module.exports = router;
