class UpdateProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute({productId, name, price, stock}) {
        const product = await this.productRepository.findById(productId);

        if (!product) {
            throw new Error("Product not found");
        }

        const existingProduct = await this.productRepository.findByName(name);

        if (existingProduct && existingProduct.id !== productId) {
            throw new Error("A product with this name already exists");
        }

        const updatedProduct = await this.productRepository.update(productId, name, price, stock);

        return updatedProduct;
    }
}

module.exports = UpdateProductService;
