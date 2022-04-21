class CreateProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute({name, price, stock}) {
        const product = await this.productRepository.findByName(name);

        if (product) {
            throw new Error("A product with this name already exists");
        }

        const newProduct = await this.productRepository.create(name, price, stock);

        return newProduct;
    }
}

module.exports = CreateProductService;
