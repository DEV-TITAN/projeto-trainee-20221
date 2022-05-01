require("dotenv").config();
require("express-async-errors");
const express = require("express");
const routes = require("./routes");
const ErrorHandlerMiddleware = require("./middlewares/ErrorHandlerMiddleware");

class App {
    constructor() {
        this.app = express();

        this.setMiddlewares();
        this.setRoutes();
        this.setErrorHandling();
    }

    setMiddlewares() {
        this.app.use(express.urlencoded({ extended: true }));
    }

    setRoutes() {
        this.app.use(routes);
    }

    /**
     * This must be the last middleware set
     */
    setErrorHandling() {
        const errorHandlerMiddleware = new ErrorHandlerMiddleware();
        this.app.use((err, req, res, next) => {
            errorHandlerMiddleware.handleError(err, req, res, next);
        });
    }
}

module.exports = new App().app;
