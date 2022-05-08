class ListProductsService {
    constructor(productRepository) {
        this.__productRepository = productRepository;
    }

    async execute() {
        const products = await this.__productRepository.findAll();

        return products;
    }
}

module.exports = ListProductsService;
