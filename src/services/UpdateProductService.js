const { httpStatus } = require("../utils/constants");
const {ApiError} = require("../utils/errors");

class UpdateProductService {
    constructor(productRepository) {
        this.__productRepository = productRepository;
    }

    async execute({productId, name, price, stock}) {
        const product = await this.__productRepository.findById(productId);

        if (!product) {
            throw new ApiError("Product not found", httpStatus.NOT_FOUND);
        }

        const existingProduct = await this.__productRepository.findByName(name);

        if (existingProduct && existingProduct.id !== productId) {
            throw new ApiError("A product with this name already exists");
        }

        const updatedProduct = await this.__productRepository.update(productId, {name, price, stock});

        return updatedProduct;
    }
}

module.exports = UpdateProductService;
