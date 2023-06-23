import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategory } from './dtos/create-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { ProductService } from '../product/product.service';
import { ReturnCategory } from './dtos/return-category.dto';
import { CountProduct } from '../product/dtos/count-product.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,

    @Inject(forwardRef(() => ProductService))
    private readonly productService: ProductService,
  ) {}

  // Função para fazer recuperar o category_id e o total
  findAmountCategoryInProducts(
    category: CategoryEntity,
    countList: CountProduct[],
  ): number {
    const count = countList.find(
      (itemCount) => itemCount.category_id === category.id,
    );

    if (count) {
      return count.total;
    }

    return 0;
  }

  // Função para retornar todas as categorias
  async findAllCategories(): Promise<ReturnCategory[]> {
    const categories = await this.categoryRepository.find();

    const count = await this.productService.countProductByCategoryId();

    // Verifica se existe a categoria ou se ela é igual a zero
    if (!categories || categories.length === 0) {
      throw new NotFoundException('Categories empty');
    }

    return categories.map(
      (category) =>
        new ReturnCategory(
          category,
          this.findAmountCategoryInProducts(category, count),
        ),
    );
  }

  // Função para lista a categoria por Id
  async findCategoryById(categoryId: number): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOne({
      where: {
        id: categoryId,
      },
    });

    // Verifica se a categoria existe
    if (!category) {
      throw new NotFoundException(`Category id: ${categoryId} not found`);
    }

    return category;
  }

  // Retorna a categoria pelo o nome
  async findCategoryByName(name: string): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOne({
      where: {
        name,
      },
    });

    // Verificar se a categoria existe
    if (!category) {
      throw new NotFoundException(`Category name ${name} not found`);
    }

    return category;
  }

  // Função para criação da categoria
  async createCategory(
    createCategory: CreateCategory,
  ): Promise<CategoryEntity> {
    const category = await this.findCategoryByName(createCategory.name).catch(
      () => undefined,
    );

    // Valida se já tem uma categoria com o nome criado
    if (category) {
      throw new BadRequestException(
        `Category name ${createCategory.name} exist`,
      );
    }

    return this.categoryRepository.save(createCategory);
  }
}
