import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrderService } from './order.service';
import { UserId } from '../../decorators/user-id.decorator';
import { OrderEntity } from './entities/order.entity';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  public async createOrder(
    @Body() createOrderDto: CreateOrderDto,
    @UserId() userId: number,
  ) {
    return this.orderService.createOrder(createOrderDto, userId);
  }

  @Get()
  public async findOrdersByUserId(
    @UserId() userId: number,
  ): Promise<OrderEntity[]> {
    return this.orderService.findOrdersByUserId(userId);
  }
}
