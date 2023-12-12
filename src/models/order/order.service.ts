import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dtos/create-order.dto';
import { PaymentService } from '../payment/payment.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderEntity: Repository<OrderEntity>,

    private readonly paymentService: PaymentService,
  ) {}

  public async createOrder(createOrderDto: CreateOrderDto, cartId: number) {
    await this.paymentService.createPayment(createOrderDto);

    return null;
  }
}
