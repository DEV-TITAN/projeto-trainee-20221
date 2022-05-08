class HomeController {
    index(req, res) {
        res.render("index");
    }

    about(req, res) {
        res.render("about", { title: "About" });
    }
}

module.exports = HomeController;
