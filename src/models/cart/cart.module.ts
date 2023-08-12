import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { CartProductModule } from '../cart-product/cart-product.module';
import { CartController } from './cart.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity]), CartProductModule],
  providers: [CartService],
  controllers: [CartController],
  exports: [CartService],
})
export class CartModule {}
