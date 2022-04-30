const {httpStatus} = require("../utils/constants");

class BaseController {
    jsonResponse(data) {
        return {
            status: "success",
            data,
        };
    }

    ok(res, data) {
        const jsonResponse = this.jsonResponse(data);
        return res.status(httpStatus.OK).json(jsonResponse);
    }

    created(res, data) {
        const jsonResponse = this.jsonResponse(data);
        return res.status(httpStatus.CREATED).json(jsonResponse);
    }

    noContent(res) {
        return res.sendStatus(httpStatus.NO_CONTENT);
    }

    notImplemented() {
        // throw new ApiError("Not Implemented", httpStatus.NOT_IMPLEMENTED);
        throw new Error("Not Implemented");
    }
}

module.exports = BaseController;
