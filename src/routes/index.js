const { Router } = require("express");
const { httpStatus } = require("../utils/constants");
const v1 = require("./v1");

const router = Router();

router.use("/v1", v1);

router.get("/ping", (req, res) => {
    res.json({status: "success", message: "pong"});
});

// Must be the last one
router.use((req, res) => {
    // throw new HttpError("Not Found", HttpStatus.NOT_FOUND);
    res.status(httpStatus.NOT_FOUND).json({status: "error", message: "NOT_FOUND"});
});

module.exports = router;
