require("dotenv").config();
require("express-async-errors");
const express = require("express");
const routes = require("./routes");
const ErrorHandlerMiddleware = require("./middlewares/ErrorHandlerMiddleware");
const LoggerMiddleware = require("./middlewares/LoggerMiddleware");

class App {
    constructor() {
        this.app = express();

        this.setMiddlewares();
        this.setRoutes();
        this.setErrorHandling();
    }

    setMiddlewares() {
        const loggerMiddleware = new LoggerMiddleware();

        this.app.use(express.urlencoded({ extended: true }));
        this.app.use((req, res, next) => {
            loggerMiddleware.logRequest(req, res, next);
        });
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
