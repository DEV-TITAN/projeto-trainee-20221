class ProductController {
    constructor(
        createProductService,
        listProductsService,
        getProductService,
        updateProductService,
        deleteProductService,
    ) {
        this.__createProductService = createProductService
        this.__listProductsService = listProductsService
        this.__getProductService = getProductService
        this.__updateProductService = updateProductService
        this.__deleteProductService = deleteProductService
    }

    async createProduct(req, res) {
        const {name, price, stock} = req.body;

        await this.__createProductService.execute({name, price, stock});

        res.redirect("/products/create");
    }

    create(req, res) {
        res.render("products/create", { title: "Create Product" });
    }

    async index(req, res) {
        const products = await this.__listProductsService.execute();

        res.render("products/index", { title: "List of Products", products });
    }

    async show(req, res) {
        const {productId} = req.params;

        const product = await this.__getProductService.execute({productId});

        res.render("products/show", { title: product.name, product });
    }

    async updateProduct(req, res) {
        const {productId} = req.params;
        const {name, price, stock} = req.body;

        const product = await this.__updateProductService.execute({productId, name, price, stock});

        res.redirect(`/products/show/${product.id}`);
    }

    async update(req, res) {
        const {productId} = req.params;
        const product = await this.__getProductService.execute({productId});

        res.render("products/update", { title: "Update Product", product });
    }

    async delete(req, res) {
        const {productId} = req.params;

        await this.__deleteProductService.execute({productId});

        res.redirect("/products");
    }
}

module.exports = ProductController;
