import { Body, Controller, Post } from '@nestjs/common';
import { Roles } from '../../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { InsertCartDto } from './dtos/insert-cart.dto';
import { CartEntity } from './entities/cart.entity';
import { UserId } from '../../decorators/user-id.decorator';
import { CartService } from './cart.service';

@Roles(UserType.User, UserType.Admin)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  public async createCart(
    @Body() insertCart: InsertCartDto,
    @UserId() userId: number,
  ): Promise<CartEntity> {
    return this.cartService.insertProductInCart(insertCart, userId);
  }
}
