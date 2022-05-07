const { Router } = require("express");
const { httpStatus } = require("../utils/constants");
const { HttpError } = require("../utils/errors");
const productsRoutes = require("./productsRoutes");
const homeRoutes = require("./homeRoutes");

const router = Router();

router.use(["/home", "/"], homeRoutes);
router.use("/products", productsRoutes);

/**
 * This one must be the last route
 */
router.use((req, res) => {
    throw new HttpError(`Cannot find ${req.url}`, httpStatus.NOT_FOUND);
});

module.exports = router;
