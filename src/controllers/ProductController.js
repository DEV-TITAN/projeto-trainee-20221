const {httpStatus} = require("../utils/constants");

class ProductController {
    constructor(
        createProductService,
        listProductsService,
        updateProductService
    ) {
        this.createProductService = createProductService
        this.listProductsService = listProductsService
        this.updateProductService = updateProductService
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

    async index(req, res) {
        const products = await this.listProductsService.execute();

        res.status(httpStatus.OK).json({
            status: "success",
            data: {
                products
            }
        });
    }

    async update(req, res) {
        const {productId} = req.params;
        const {name, price, stock} = req.body;

        const product = await this.updateProductService.execute({productId, name, price, stock});

        res.status(httpStatus.CREATED).json({
            status: "success",
            data: {
                product
            }
        });
    }
}

module.exports = ProductController;
