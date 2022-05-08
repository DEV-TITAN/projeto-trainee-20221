const { Router } = require("express");
const HomeController = require("../controllers/HomeController");

const router = Router();

router.get(["/index", "/"], (req, res) => {
    const homeController = new HomeController();
    homeController.index(req, res);
});

router.get("/about", (req, res) => {
    const homeController = new HomeController();
    homeController.about(req, res);
});

module.exports = router;
