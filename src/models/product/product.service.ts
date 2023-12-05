import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductEntity } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryService } from '../category/category.service';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,

    private readonly categoryService: CategoryService,
  ) {}

  public async findAll(): Promise<ProductEntity[]> {
    const products = await this.productRepository.find();

    if (!products || products.length === 0) {
      throw new NotFoundException('Not found products');
    }

    return products;
  }

  public async createProduct(
    createProduct: CreateProductDto,
  ): Promise<ProductEntity> {
    await this.categoryService.findCategoryById(createProduct.categoryId);

    return this.productRepository.save({
      ...createProduct,
    });
  }
}
