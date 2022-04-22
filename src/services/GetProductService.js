class GetProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute({productId}) {
        const product = await this.productRepository.findById(productId);

        if (!product) {
            throw new Error("Product not found");
        }

        return product;
    }
}

module.exports = GetProductService;
