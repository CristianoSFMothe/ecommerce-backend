import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserId } from '../decorators/user-id.decorator';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrderService } from './order.service';
import { OrderEntity } from './entities/order.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pedidos')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(
    @Body() createOrderDto: CreateOrderDto,
    @UserId() userId: number,
  ) {
    return this.orderService.createOrder(createOrderDto, userId);
  }

  @Get()
  async findOrdersByUserId(@UserId() userId: number): Promise<OrderEntity[]> {
    return this.orderService.findOrdersByUserId(userId);
  }
}
