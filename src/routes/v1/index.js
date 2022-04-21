const { Router } = require("express");
const productsRoutes = require("./productsRoutes");

const router = Router();

router.use("/products", productsRoutes);

module.exports = router;
