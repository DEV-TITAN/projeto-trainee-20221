const { httpStatus } = require("../utils/constants");
const {ApiError} = require("../utils/errors");

class CreateProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute({name, price, stock}) {
        const product = await this.productRepository.findByName(name);

        if (product) {
            throw new ApiError("A product with this name already exists");
        }

        const newProduct = await this.productRepository.create(name, price, stock);

        return newProduct;
    }
}

module.exports = CreateProductService;
