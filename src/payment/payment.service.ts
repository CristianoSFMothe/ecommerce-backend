import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartProductEntity } from '../cart-product/entities/cart-product.entity';
import { CartEntity } from '../cart/entities/cart.entity';
import { CreateOrderDto } from '../order/dtos/create-order.dto';
import { PaymentType } from '../payment-status/enums/payment-type.enum';
import { ProductEntity } from '../product/entities/product.entity';
import { Repository } from 'typeorm';
import { PaymentPixEntity } from './entities/payment-pix.entity';
import { PaymentEntity } from './entities/payment.entity';
import { PaymentCreditCardEntity } from './entities/payment-credit.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(PaymentEntity)
    private readonly paymentRepository: Repository<PaymentEntity>,
  ) {}

  async createPayment(
    createOrderDto: CreateOrderDto,
    products: ProductEntity[],
    cart: CartEntity,
  ): Promise<PaymentEntity> {
    // Buscando o producto

    const finalPrice = cart.cartProduct
      ?.map((cartProduct: CartProductEntity) => {
        const product = products.find(
          (product) => product.id === cartProduct.productId,
        );

        // Se encontrar o produto realiza o calculo
        if (product) {
          return cartProduct.amount * product.price;
        }

        return 0;
      })
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    if (createOrderDto.amountPayments) {
      const paymentCreditCard = new PaymentCreditCardEntity(
        PaymentType.Done,
        finalPrice,
        0,
        finalPrice,
        createOrderDto,
      );
      return this.paymentRepository.save(paymentCreditCard);
    } else if (createOrderDto.codePix && createOrderDto.datePayment) {
      const paymentPix = new PaymentPixEntity(
        PaymentType.Done,
        finalPrice,
        0,
        finalPrice,
        createOrderDto,
      );
      return this.paymentRepository.save(paymentPix);
    }

    throw new BadRequestException(
      'Amount Payments or code pix or date payment not found',
    );
  }
}
