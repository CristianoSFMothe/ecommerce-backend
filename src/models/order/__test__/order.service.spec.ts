import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from '../order.service';
import { OrderEntity } from '../entities/order.entity';
import { Repository } from 'typeorm';
import { PaymentService } from '../../../models/payment/payment.service';
import { CartService } from '../../../models/cart/cart.service';
import { OrderProductService } from '../../../models/order-product/order-product.service';
import { ProductService } from '../../../models/product/product.service';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('OrderService', () => {
  let service: OrderService;
  let orderRepositoty: Repository<OrderEntity>;
  let paymentService: PaymentService;
  let cartService: CartService;
  let orderProductService: OrderProductService;
  let productService: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        {
          provide: PaymentService,
          useValue: {
            createPayment: jest.fn(),
          },
        },
        {
          provide: CartService,
          useValue: {
            findCartByUserId: jest.fn(),
            clearCart: jest.fn(),
          },
        },
        {
          provide: OrderProductService,
          useValue: {
            createOrderProduct: jest.fn(),
          },
        },
        {
          provide: ProductService,
          useValue: {
            findAll: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(OrderEntity),
          useValue: {
            find: '',
          },
        },
      ],
    }).compile();

    service = module.get<OrderService>(OrderService);
    paymentService = module.get<PaymentService>(PaymentService);
    cartService = module.get<CartService>(CartService);
    orderProductService = module.get<OrderProductService>(OrderProductService);
    productService = module.get<ProductService>(ProductService);
    orderRepositoty = module.get<Repository<OrderEntity>>(
      getRepositoryToken(OrderEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(orderRepositoty).toBeDefined();
    expect(cartService).toBeDefined();
    expect(paymentService).toBeDefined();
    expect(orderProductService).toBeDefined();
    expect(productService).toBeDefined();
  });
});