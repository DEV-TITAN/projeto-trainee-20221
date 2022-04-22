const {httpStatus} = require("../utils/constants");

class ProductController {
    constructor(
        createProductService,
        listProductsService,
        getProductService,
        updateProductService,
        deleteProductService,
    ) {
        this.createProductService = createProductService
        this.listProductsService = listProductsService
        this.getProductService = getProductService
        this.updateProductService = updateProductService
        this.deleteProductService = deleteProductService
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

    async show(req, res) {
        const {productId} = req.params;

        const product = await this.getProductService.execute({productId});

        res.status(httpStatus.OK).json({
            status: "success",
            data: {
                product
            }
        });
    }

    async update(req, res) {
        const {productId} = req.params;
        const {name, price, stock} = req.body;

        const product = await this.updateProductService.execute({productId, name, price, stock});

        res.status(httpStatus.OK).json({
            status: "success",
            data: {
                product
            }
        });
    }

    async delete(req, res) {
        const {productId} = req.params;

        await this.deleteProductService.execute({productId});

        res.status(httpStatus.OK).json({
            status: "success",
            data: null
        });
    }
}

module.exports = ProductController;
