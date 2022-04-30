const { Router } = require("express");
const {productController} = require("../../modules/productModule");

const router = Router();

router.post("/", async (req, res) => {
    await productController.create(req, res);
});

router.get("/", async (req, res) => {
    await productController.index(req, res);
});

router.get("/:productId", async (req, res) => {
    await productController.show(req, res);
});

router.put("/:productId", async (req, res) => {
    await productController.update(req, res);
});

router.delete("/:productId", async (req, res) => {
    await productController.delete(req, res);
});

module.exports = router;
