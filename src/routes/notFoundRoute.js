const { Router } = require("express");
const { httpStatus } = require("../utils/constants");

const router = Router();

router.use((req, res) => {
    // throw new Error("Not Found", HttpStatus.NOT_FOUND);
    res.status(httpStatus.NOT_FOUND).json({status: "error", message: "NOT_FOUND"});
});

module.exports = router;
