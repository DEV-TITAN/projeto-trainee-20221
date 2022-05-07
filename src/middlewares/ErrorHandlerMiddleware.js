const {HttpError} = require("../utils/errors");
const {httpStatus} = require("../utils/constants");

class ErrorHandlerMiddleware {
    handleError(err, req, res, next) {
        console.error(err.stack);

        const title = err.statusCode === httpStatus.NOT_FOUND ? "Not Found" : "Error";


        if (err instanceof HttpError) {
            res.render("error", {title, error: err});
            return;
        }

        if (err instanceof SyntaxError) {
            res.render("error", {title, error: {
                statusCode: httpStatus.BAD_REQUEST,
                message: err.message,
            } });
            return;
        }

        res.render("error", {title, error: {
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            message: "Internal Server Error",
        } });
    }
}

module.exports = ErrorHandlerMiddleware;
