const {HttpError} = require("../utils/errors");
const {httpStatus} = require("../utils/constants");

class ErrorHandlerMiddleware {
    handleError(err, req, res, next) {
        console.error(err.stack);

        if (err instanceof HttpError) {
            const jsonResponse = {
                status: "error",
                code: err.statusCode,
                message: err.message,
            };

            res.status(err.statusCode).json(jsonResponse);
            return;
        }

        if (err instanceof SyntaxError) {
            const jsonResponse = {
                status: "error",
                code: httpStatus.BAD_REQUEST,
                message: err.message,
            };

            res.status(httpStatus.BAD_REQUEST).json(jsonResponse);
            return;
        }

        const jsonResponse = {
            status: "error",
            code: httpStatus.INTERNAL_SERVER_ERROR,
            message: "Internal Server Error",
        };

        res.status(jsonResponse.code).json(jsonResponse);
    }
}

module.exports = ErrorHandlerMiddleware;
