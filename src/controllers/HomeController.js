class HomeController {
    index(req, res) {
        res.render("index", { title: "List of Products" });
    }

    about(req, res) {
        res.render("about", { title: "About" });
    }
}

module.exports = HomeController;
