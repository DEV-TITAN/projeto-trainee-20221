const {httpStatus} = require("./constants");

class HttpError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "HttpError";
        this.statusCode = statusCode;
    }
}

class ApiError extends HttpError {
    constructor(message, statusCode = httpStatus.BAD_REQUEST) {
        super(message);
        this.name = "ApiError";
        this.statusCode = statusCode;
    }
}

module.exports = {
    HttpError,
    ApiError
}
