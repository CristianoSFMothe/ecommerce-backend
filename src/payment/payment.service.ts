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
import { HelperMessage } from 'src/healpers/messages/message.helper';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(PaymentEntity)
    private readonly paymentRepository: Repository<PaymentEntity>,
  ) {}

  // Função para calcular o pagamento
  generateFinalPrice(cart: CartEntity, products: ProductEntity[]) {
    // Validado se encontrou o cart product ou se for igual a zero
    if (!cart.cartProduct || cart.cartProduct.length === 0) {
      return 0;
    }

    // Método para retornar o calculo dos produtos no carrinho
    return cart.cartProduct
      .map((cartProduct: CartProductEntity) => {
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
  }

  // Função para criação do pagamento
  async createPayment(
    createOrderDto: CreateOrderDto,
    products: ProductEntity[],
    cart: CartEntity,
  ): Promise<PaymentEntity> {
    // Buscando o produto

    const finalPrice = this.generateFinalPrice(cart, products);

    // Verificar a forma de pagamento se for no cartão de crédito
    if (createOrderDto.amountPayments) {
      const paymentCreditCard = new PaymentCreditCardEntity(
        PaymentType.Done,
        finalPrice,
        0,
        finalPrice,
        createOrderDto,
      );
      return this.paymentRepository.save(paymentCreditCard);

      // Verificar se o pagamento é no PIX
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

    throw new BadRequestException(HelperMessage.PAYMENT_INVALID);
  }
}
