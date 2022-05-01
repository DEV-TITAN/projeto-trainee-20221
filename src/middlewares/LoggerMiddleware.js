class LoggerMiddleware {
    logRequest(req, res, next) {
        console.info(`${req.method} ${req.path}`);
        next();
    }
}

module.exports = LoggerMiddleware;
