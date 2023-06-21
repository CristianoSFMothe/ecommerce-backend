import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from '../category/category.service';
import { DeleteResult, In, Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductEntity } from './entities/product.entity';
import { UpdateProductDto } from './dtos/update-product.dto';
import { HelperMessage } from '../healpers/messages/message.helper';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,

    private readonly categoryService: CategoryService,
  ) {}

  // Função para retorna todos os produtos
  async findAll(productId?: number[]): Promise<ProductEntity[]> {
    let findOption = {};

    // Verficar se o produto existe ou se é menor que zero
    if (productId && productId.length > 0) {
      findOption = {
        where: {
          id: In(productId),
        },
      };
    }

    const products = await this.productRepository.find(findOption);

    // Verifica se o produto existe e se é igual a zero
    if (!products || products.length === 0) {
      throw new NotFoundException(HelperMessage.PRODUCT_NOT_FOUND);
    }

    return products;
  }

  // Função para criação do produto
  async createProduct(createProduct: CreateProductDto): Promise<ProductEntity> {
    await this.categoryService.findCategoryById(createProduct.categoryId);

    return this.productRepository.save({
      ...createProduct,
    });
  }

  // Função para lista o porudto pelo o Id
  async findProductById(productId: number): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({
      where: {
        id: productId,
      },
    });

    // Verifica se o produto existe
    if (!product) {
      throw new NotFoundException(HelperMessage.PRODUCT_NOT_FOUND);
    }

    return product;
  }

  // Função para deletar o produto pelo Id
  async deleteProduct(productId: number): Promise<DeleteResult> {
    await this.findProductById(productId);

    return this.productRepository.delete({ id: productId });
  }

  // Função para atualizar o produto
  async updateProduct(
    updateProduct: UpdateProductDto,
    productId: number,
  ): Promise<ProductEntity> {
    const product = await this.findProductById(productId);

    return this.productRepository.save({
      ...product,
      ...updateProduct,
    });
  }
}
