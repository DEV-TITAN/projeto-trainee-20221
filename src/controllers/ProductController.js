const {httpStatus} = require("../utils/constants");

class ProductController {
    constructor(
        createProductService,
    ) {
        this.createProductService = createProductService
    }

    async create(req, res) {
        const {name, price, stock} = req.body;

        const product = await this.createProductService.execute({name, price, stock});

        res.status(httpStatus.CREATED).json({
            status: "success",
            data: {
                product
            }
        });
    }

module.exports = ProductController;
