import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserId } from '../decorators/user-id.decorator';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrderService } from './order.service';
import { OrderEntity } from './entities/order.entity';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from '../decorators/roles.decorators';
import { UserType } from '../user/enm/user-type.enum';
import { ReturnOrderDto } from './dtos/return-order.dto';

@ApiTags('Pedidos')
@Roles(UserType.Admin, UserType.User)
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(
    @Body() createOrderDto: CreateOrderDto,
    @UserId() userId: number,
  ): Promise<OrderEntity> {
    return this.orderService.createOrder(createOrderDto, userId);
  }

  @Get()
  async findOrdersByUserId(@UserId() userId: number): Promise<OrderEntity[]> {
    return this.orderService.findOrdersByUserId(userId);
  }

  @Get('/:all')
  @Roles(UserType.Admin)
  async findAllOrders(): Promise<ReturnOrderDto[]> {
    return (await this.orderService.findAllOrders()).map(
      (order) => new ReturnOrderDto(order),
    );
  }
}
