import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartService } from '../cart/cart.service';
import { CartEntity } from '../cart/entities/cart.entity';
import { OrderProductEntity } from '../order-product/entities/order-product.entity';
import { OrderProductService } from '../order-product/order-product.service';
import { PaymentEntity } from '../payment/entities/payment.entity';
import { PaymentService } from '../payment/payment.service';
import { ProductEntity } from '../product/entities/product.entity';
import { ProductService } from '../product/product.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrderEntity } from './entities/order.entity';
import { HelperMessage } from '../healpers/messages/message.helper';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
    private readonly paymentService: PaymentService,
    private readonly cartService: CartService,
    private readonly orderProductService: OrderProductService,
    private readonly productService: ProductService,
  ) {}

  // Função para salvar o pedido
  async saveOrder(
    createOrderDto: CreateOrderDto,
    userId: number,
    payment: PaymentEntity,
  ): Promise<OrderEntity> {
    return this.orderRepository.save({
      addressId: createOrderDto.addressId,
      date: new Date(),
      paymentId: payment.id,
      userId,
    });
  }

  // Função para criação dos pedidos dos produtos usando o carrinho
  async createOrderProductUsingCart(
    cart: CartEntity,
    orderId: number,
    products: ProductEntity[],
  ): Promise<OrderProductEntity[]> {
    return Promise.all(
      cart.cartProduct?.map((cartProduct) =>
        this.orderProductService.createOrderProduct(
          cartProduct.productId,
          orderId,
          products.find((product) => product.id === cartProduct.productId)
            ?.price || 0,
          cartProduct.amount,
        ),
      ),
    );
  }

  // Função para criação do pedido
  async createOrder(
    createOrderDto: CreateOrderDto,
    userId: number,
  ): Promise<OrderEntity> {
    // Buscando o carrinho pelo o userId
    const cart = await this.cartService.findCartByUserId(userId, true);

    // Buscando todos os produtos
    const products = await this.productService.findAll(
      cart.cartProduct?.map((cartProduct) => cartProduct.productId),
    );

    // Criando o pagamento
    const payment: PaymentEntity = await this.paymentService.createPayment(
      createOrderDto,
      products,
      cart,
    );

    // Salvando o pedido
    const order = await this.saveOrder(createOrderDto, userId, payment);

    // Criando o pedido do produto usando o carrinho
    await this.createOrderProductUsingCart(cart, order.id, products);

    // Limpando o carinho
    await this.cartService.clearCart(userId);

    return order;
  }

  // Função para buscar todas os pedidos
  async findOrdersByUserId(
    userId?: number,
    orderId?: number,
  ): Promise<OrderEntity[]> {
    const orders = await this.orderRepository.find({
      where: {
        userId,
        id: orderId,
      },
      relations: {
        address: true,
        ordersProduct: {
          product: true,
        },
        payment: {
          paymentStatus: true,
        },
      },
    });

    // Verificar se a order não existe ou se for igual a zero
    if (!orders || orders.length === 0) {
      throw new NotFoundException(HelperMessage.ORDER_NOT_FOUND);
    }

    return orders;
  }

  // Função para retornar todas os pedidos
  public async findAllOrders(): Promise<OrderEntity[]> {
    const orders = await this.orderRepository.find({
      relations: {
        user: true,
      },
    });

    if (!orders || orders.length === 0) {
      throw new NotFoundException(HelperMessage.ORDER_NOT_FOUND);
    }

    return orders;
  }
}
