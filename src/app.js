const express = require("express");
require("dotenv").config();
require("express-async-errors");
const routes = require("./routes");

class App {
    constructor() {
        this.app = express();

        this.setMiddlewares();
        this.setRoutes();
    }

    setMiddlewares() {
        this.app.use(express.urlencoded({ extended: true }));
    }

    setRoutes() {
        this.app.use(routes);
    }
}

module.exports = new App().app;
