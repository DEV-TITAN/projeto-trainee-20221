const express = require("express");
const routes = require("./routes");

class App {
    constructor() {
        this.app = express();

        this.setRoutes();
    }

    setRoutes() {
        this.app.use(routes);
    }
}

module.exports = new App().app;
