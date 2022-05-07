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

    async createProduct(req, res) {
        const {name, price, stock} = req.body;

        await this.createProductService.execute({name, price, stock});

        res.redirect("/products/create");
    }

    create(req, res) {
        res.render("products/create", { title: "Create Product" });
    }

    async index(req, res) {
        const products = await this.listProductsService.execute();

        res.render("products/index", { title: "List of Products", products });
    }

    async show(req, res) {
        const {productId} = req.params;

        const product = await this.getProductService.execute({productId});

        res.render("products/show", { title: product.name, product });
    }

    async updateProduct(req, res) {
        const {productId} = req.params;
        const {name, price, stock} = req.body;

        const product = await this.updateProductService.execute({productId, name, price, stock});

        res.redirect(`/products/show/${product.id}`);
    }

    async update(req, res) {
        const {productId} = req.params;
        const product = await this.getProductService.execute({productId});

        res.render("products/update", { title: "Update Product", product });
    }

    async delete(req, res) {
        const {productId} = req.params;

        await this.deleteProductService.execute({productId});

        res.redirect("/products");
    }
}

module.exports = ProductController;
