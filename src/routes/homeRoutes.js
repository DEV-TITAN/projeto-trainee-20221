const { Router } = require("express");
const {homeController} = require("../modules/homeModule");

const router = Router();

router.get(["/index", "/"], (req, res) => {
    homeController.index(req, res);
});

router.get("/about", (req, res) => {
    homeController.about(req, res);
});

module.exports = router;
