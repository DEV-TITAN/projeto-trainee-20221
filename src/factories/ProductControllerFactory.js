const db = require("../database");
const ProductRepository = require("../repositories/ProductRepository");
const CreateProductService = require("../services/CreateProductService");
const ListProductsService = require("../services/ListProductsService");
const UpdateProductService = require("../services/UpdateProductService");
const DeleteProductService = require("../services/DeleteProductService");
const GetProductService = require("../services/GetProductService");
const ProductController = require("../controllers/ProductController");

class ProductControllerFactory {
    static getProductController() {
        const productRepository = new ProductRepository(db);
        const createProductService = new CreateProductService(productRepository);
        const listProductsService = new ListProductsService(productRepository);
        const updateProductService = new UpdateProductService(productRepository);
        const deleteProductService = new DeleteProductService(productRepository);
        const getProductService = new GetProductService(productRepository);

        return new ProductController(
            createProductService,
            listProductsService,
            getProductService,
            updateProductService,
            deleteProductService,
        );
    }
}

module.exports = ProductControllerFactory;

