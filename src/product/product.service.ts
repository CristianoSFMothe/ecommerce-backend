import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from '../category/category.service';
import { DeleteResult, In, Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductEntity } from './entities/product.entity';
import { UpdateProductDto } from './dtos/update-product.dto';
import { HelperMessage } from '../healpers/messages/message.helper';
import { CountProduct } from './dtos/count-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,

    @Inject(forwardRef(() => CategoryService))
    private readonly categoryService: CategoryService,
  ) {}

  // Função para retorna todos os produtos
  async findAll(
    productId?: number[],
    isFindRelations?: boolean,
  ): Promise<ProductEntity[]> {
    let findOptions = {};

    // Verficar se o produto existe ou se é menor que zero
    if (productId && productId.length > 0) {
      findOptions = {
        where: {
          id: In(productId),
        },
      };
    }

    if (isFindRelations) {
      findOptions = {
        ...findOptions,
        relations: {
          category: true,
        },
      };
    }

    const products = await this.productRepository.find(findOptions);

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

  // Função para retornar a de produtos na categoria com grupoBy
  public async countProductByCategoryId(): Promise<CountProduct[]> {
    return this.productRepository
      .createQueryBuilder('product')
      .select('product.category_id, COUNT(*) as total')
      .groupBy('product.category_id')
      .getRawMany();
  }
}
