const { httpStatus } = require("../utils/constants");
const {ApiError} = require("../utils/errors");

class GetProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute({productId}) {
        const product = await this.productRepository.findById(productId);

        if (!product) {
            throw new ApiError("Product not found", httpStatus.NOT_FOUND);
        }

        return product;
    }
}

module.exports = GetProductService;
