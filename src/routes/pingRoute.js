const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.json({status: "success", message: "pong"});
});

module.exports = router;
