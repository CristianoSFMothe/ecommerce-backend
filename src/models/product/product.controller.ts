import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ReturnProduct } from './dtos/return-product.dto';
import { Roles } from '../../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductEntity } from './entities/product.entity';

@Roles(UserType.Admin, UserType.User)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  public async findAll(): Promise<ReturnProduct[]> {
    return (await this.productService.findAll()).map(
      (product) => new ReturnProduct(product),
    );
  }

  @Roles(UserType.Admin)
  @Post()
  public async createProduct(
    @Body() createProduct: CreateProductDto,
  ): Promise<ProductEntity> {
    return this.productService.createProduct(createProduct);
  }
}
