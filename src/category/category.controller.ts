import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { ReturnCategory } from './dtos/return-category.dto';
import { Roles } from 'src/decorators/roles.decorators';
import { UserType } from 'src/user/enm/user-type.enum';
import { CreateCategory } from './dtos/create-category.dto';

@Roles(UserType.Admin, UserType.User)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Roles(UserType.Admin, UserType.User)
  @Post()
  @UsePipes(ValidationPipe)
  async createCategory(
    @Body() createCategory: CreateCategory,
  ): Promise<CreateCategory> {
    return this.categoryService.createCategory(createCategory);
  }

  @Get()
  async findAllCategories(): Promise<ReturnCategory[]> {
    return (await this.categoryService.findAllCategories()).map(
      (category) => new ReturnCategory(category),
    );
  }
}
