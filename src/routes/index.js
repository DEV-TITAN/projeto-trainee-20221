const { Router } = require("express");
const notFoundRoute = require("./notFoundRoute");
const pingRoute = require("./pingRoute");
// const v1 = require("./v1");

const router = Router();

// router.use("/v1", v1);
router.use("/ping", pingRoute);
router.use(notFoundRoute); // Must be the last one

module.exports = router;
