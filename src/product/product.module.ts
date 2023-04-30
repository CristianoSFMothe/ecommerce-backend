import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductService } from './product.service';

@Module({
  providers: [ProductService]
})
export class ProductModule {}
