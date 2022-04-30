const BaseController = require("./BaseController");

class ProductController extends BaseController {
    constructor(
        createProductService,
        listProductsService,
        getProductService,
        updateProductService,
        deleteProductService,
    ) {
        super();
        this.createProductService = createProductService
        this.listProductsService = listProductsService
        this.getProductService = getProductService
        this.updateProductService = updateProductService
        this.deleteProductService = deleteProductService
    }

    async create(req, res) {
        const {name, price, stock} = req.body;

        const product = await this.createProductService.execute({name, price, stock});

        this.created(res, { product });
    }

    async index(req, res) {
        const products = await this.listProductsService.execute();

        this.ok(res, { products });
    }

    async show(req, res) {
        const {productId} = req.params;

        const product = await this.getProductService.execute({productId});

        this.ok(res, { product });
    }

    async update(req, res) {
        const {productId} = req.params;
        const {name, price, stock} = req.body;

        const product = await this.updateProductService.execute({productId, name, price, stock});

        this.ok(res, { product });
    }

    async delete(req, res) {
        const {productId} = req.params;

        await this.deleteProductService.execute({productId});

        this.ok(res, null);
    }
}

module.exports = ProductController;
