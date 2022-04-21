const JSONProductRepository = require("../repositories/JSONProductRepository");
const CreateProductService = require("../services/CreateProductService");
const ListProductsService = require("../services/ListProductsService");
const UpdateProductService = require("../services/UpdateProductService");
const DeleteProductService = require("../services/DeleteProductService");
const ProductController = require("../controllers/ProductController");

class ProductFactory {
    static create() {
        const productRepository = new JSONProductRepository();

        const createProductService = new CreateProductService(productRepository);
        const listProductsService = new ListProductsService(productRepository);
        const updateProductService = new UpdateProductService(productRepository);
        const deleteProductService = new DeleteProductService(productRepository);

        const productController = new ProductController(
            createProductService,
            listProductsService,
            updateProductService,
            deleteProductService
        );

        return productController;
    }
}

module.exports = ProductFactory;
