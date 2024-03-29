import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ReturnCategoryDto } from './dtos/return-category.dto';
import { Roles } from '../../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { CreateCategory } from './dtos/create-category.dto';
import { CategoryEntity } from './entities/category.entity';

@Roles(UserType.User, UserType.Admin)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  public async findAllCategories(): Promise<ReturnCategoryDto[]> {
    return this.categoryService.findAllCategories();
  }

  @Post()
  public async createCategory(
    @Body() createCategory: CreateCategory,
  ): Promise<CategoryEntity> {
    return this.categoryService.createCategory(createCategory);
  }
}
