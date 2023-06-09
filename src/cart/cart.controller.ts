import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserId } from '../decorators/user-id.decorator';
import { DeleteResult } from 'typeorm';
import { CartService } from './cart.service';
import { InsertCartDto } from './dtos/insert-cart.dto';
import { ReturnCartDto } from './dtos/return-cart.dto';
import { UpdateCartDto } from './dtos/update-cart.dto';
import { Roles } from '../decorators/roles.decorators';
import { UserType } from '../user/enm/user-type.enum';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Carrinho')
@Roles(UserType.User, UserType.Admin)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async createCart(
    @Body() insertCart: InsertCartDto,
    @UserId() userId: number,
  ): Promise<ReturnCartDto> {
    return new ReturnCartDto(
      await this.cartService.insertProductInCart(insertCart, userId),
    );
  }

  @Get()
  async findCartByUserId(@UserId() userId: number): Promise<ReturnCartDto> {
    return new ReturnCartDto(
      await this.cartService.findCartByUserId(userId, true),
    );
  }

  @Delete()
  async clearCart(@UserId() userId: number): Promise<DeleteResult> {
    return this.cartService.clearCart(userId);
  }

  @Delete('/product/:productId')
  async deleteProductCart(
    @Param('productId') productId: number,
    @UserId() userId: number,
  ): Promise<DeleteResult> {
    return this.cartService.deleteProductCart(productId, userId);
  }

  @Patch()
  async updateProductInCart(
    @Body() updateCartDTO: UpdateCartDto,
    @UserId() userId: number,
  ): Promise<ReturnCartDto> {
    return new ReturnCartDto(
      await this.cartService.updateProductInCart(updateCartDTO, userId),
    );
  }
}
