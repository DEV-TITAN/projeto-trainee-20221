const { Router } = require("express");
const ProductFactory = require("../../factories/ProductFactory");

const router = Router();

router.post("/", async (req, res) => {
    const productController = ProductFactory.create();
    await productController.create(req, res);
});

router.get("/", async (req, res) => {
    const productController = ProductFactory.create();
    await productController.index(req, res);
});

router.put("/:productId", async (req, res) => {
    const productController = ProductFactory.create();
    await productController.update(req, res);
});

module.exports = router;
