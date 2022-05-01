const { Router } = require("express");
const { httpStatus } = require("../utils/constants");
const { HttpError } = require("../utils/errors");
const v1Routes = require("./v1");

const router = Router();

router.use("/v1", v1Routes);

router.get("/ping", (req, res) => {
    res.json({
            status: "success",
            message: "pong"
        });
});

// Must be the last one
router.use((req, res) => {
    throw new HttpError("Not Found", httpStatus.NOT_FOUND);
});

module.exports = router;
