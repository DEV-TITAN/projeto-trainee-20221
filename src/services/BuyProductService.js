const { httpStatus } = require("../utils/constants");
const {ApiError} = require("../utils/errors");

class BuyProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute({productId, quantity}) {
        const product = await this.productRepository.findById(productId);

        if (!product) {
            throw new Error("Product not found");
        }

        if (quantity > product.stock) {
            throw new ApiError("Quantity to buy is higher than the product stock");
        }

        const newStock = product.stock - quantity;

        await this.productRepository.update(productId, {stock: newStock});
    }
}

module.exports = BuyProductService;
