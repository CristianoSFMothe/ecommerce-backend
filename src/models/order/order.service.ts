import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dtos/create-order.dto';
import { PaymentService } from '../payment/payment.service';
import { PaymentEntity } from '../payment/entities/payment.entity';
import { CartService } from '../cart/cart.service';
import { OrderProductService } from '../order-product/order-product.service';
import { ProductService } from '../product/product.service';
import { OrderProductEntity } from '../order-product/entites/order-product.entity';
import { CartEntity } from '../cart/entities/cart.entity';
import { ProductEntity } from '../product/entities/product.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,

    private readonly paymentService: PaymentService,

    private readonly cartService: CartService,

    private readonly orderProductService: OrderProductService,

    private readonly producttService: ProductService,
  ) {}

  // Função para salvar o pedido
  public async saveOrder(
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

  // Criando o pedido com os produtos do carrinho
  public async createOrderProductUsingCart(
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

  // Função para criar o pedido
  public async createOrder(
    createOrderDto: CreateOrderDto,
    userId: number,
  ): Promise<OrderEntity> {
    // Buscando o carrinho
    const cart = await this.cartService.findCartByUserId(userId, true);

    // Buscar os produtos e colocar ele num array
    const products = await this.producttService.findAll(
      cart.cartProduct?.map((cartProduct) => cartProduct.productId),
    );

    // Criando o pagamento
    const payment: PaymentEntity = await this.paymentService.createPayment(
      createOrderDto,
      products,
      cart,
    );

    // Salva o pedido
    const order: OrderEntity = await this.saveOrder(
      createOrderDto,
      userId,
      payment,
    );

    // Criando o pedido de produtos usando o carrinho
    await this.createOrderProductUsingCart(cart, order.id, products);

    // Limpando o carrinho
    await this.cartService.clearCart(userId);

    return order;
  }

  // Buscando os pedidos pelo ID do usuário
  public async findOrdersByUserId(
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
        user: !!orderId,
      },
    });

    if (!orders || orders.length === 0) {
      throw new NotFoundException('Orders not found.');
    }

    return orders;
  }

  // Retorna todas os pedidos

  public async findAllOrders(): Promise<OrderEntity[]> {
    const orders = await this.orderRepository.find({
      relations: {
        user: true,
      },
    });

    if (!orders || orders.length === 0) {
      throw new NotFoundException('Orders not found.');
    }

    const ordersProduct =
      await this.orderProductService.findAmountProductsByOrderId(
        orders.map((order) => order.id),
      );

    return orders.map((order) => {
      const orderProduct = ordersProduct.find(
        (currentOrder) => currentOrder.order_id === order.id,
      );

      if (orderProduct) {
        return {
          ...order,
          amountProducts: Number(orderProduct.total),
        };
      }

      return order;
    });
  }
}
