import { ReturnAddressDto } from '../../../models/address/dtos/returnAddress.dto';
import { ReturnUserDto } from '../../../models/user/dtos/returnUser.dto';
import { OrderEntity } from '../entities/order.entity';
import { ReturnPaymentDto } from '../../../models/payment/dtos/return-payment.dto';
import { ReturnOrderProductDto } from '../../../models/order-product/dtos/return-order-product.dto';

export class ReturnOrderDto {
  id: number;
  date: string;
  userId: number;
  addressId: number;
  paymentId: number;
  user?: ReturnUserDto;
  address?: ReturnAddressDto;
  payment?: ReturnPaymentDto;
  ordersProduct?: ReturnOrderProductDto[];

  constructor(order: OrderEntity) {
    this.id = order.id;
    this.date = order.date.toString();
    this.userId = order.userId;
    this.addressId = order.addressId;
    this.paymentId = order.paymentId;
    this.user = order.user ? new ReturnUserDto(order.user) : undefined;
    this.address = order.address
      ? new ReturnAddressDto(order.address)
      : undefined;
    this.payment = order.payment
      ? new ReturnPaymentDto(order.payment)
      : undefined;
    this.ordersProduct = order.ordersProduct
      ? order.ordersProduct.map(
          (orderProduct) => new ReturnOrderProductDto(orderProduct),
        )
      : undefined;
  }
}
