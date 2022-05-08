const { httpStatus } = require("../utils/constants");
const {ApiError} = require("../utils/errors");

class DeleteProductService {
    constructor(productRepository) {
        this.__productRepository = productRepository;
    }

    async execute({productId}) {
        const product = await this.__productRepository.findById(productId);

        if (!product) {
            throw new ApiError("Product not found", httpStatus.NOT_FOUND);
        }

        await this.__productRepository.delete(productId);
    }
}

module.exports = DeleteProductService;
