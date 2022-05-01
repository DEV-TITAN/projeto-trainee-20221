const { httpStatus } = require("../utils/constants");
const {ApiError} = require("../utils/errors");

class UpdateProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute({productId, name, price, stock}) {
        const product = await this.productRepository.findById(productId);

        if (!product) {
            throw new ApiError("Product not found", httpStatus.NOT_FOUND);
        }

        const existingProduct = await this.productRepository.findByName(name);

        if (existingProduct && existingProduct.id !== productId) {
            throw new ApiError("A product with this name already exists");
        }

        const updatedProduct = await this.productRepository.update(productId, {name, price, stock});

        return updatedProduct;
    }
}

module.exports = UpdateProductService;
