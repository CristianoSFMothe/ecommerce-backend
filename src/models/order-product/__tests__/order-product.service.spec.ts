import { Test, TestingModule } from '@nestjs/testing';
import { OrderProductService } from '../order-product.service';
import { OrderProductEntity } from '../entites/order-product.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { orderProductMock } from '../__mocks__/order-product.mock';
import { productMock } from '../../../models/product/__mocks__/product.mock';
import { orderMock } from '../../../models/order/__mock__/order.mock';

describe('OrderProductService', () => {
  let service: OrderProductService;
  let orderProductRepository: Repository<OrderProductEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(OrderProductEntity),
          useValue: {
            save: jest.fn().mockResolvedValue(orderProductMock),
          },
        },
        OrderProductService,
        OrderProductService,
      ],
    }).compile();

    service = module.get<OrderProductService>(OrderProductService);
    orderProductRepository = module.get<Repository<OrderProductEntity>>(
      getRepositoryToken(OrderProductEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(orderProductRepository).toBeDefined();
  });
  it('should return orderProduct in save', async () => {
    const spy = jest.spyOn(orderProductRepository, 'save');
    const orderProduct = await service.createOrderProduct(
      productMock.id,
      orderMock.id,
      orderProductMock.price,
      orderProductMock.amount,
    );

    expect(orderProduct).toEqual(orderProductMock);
    expect(spy.mock.calls[0][0].price).toEqual(orderProductMock.price);
    expect(spy.mock.calls[0][0].amount).toEqual(orderProductMock.amount);
    expect(spy.mock.calls[0][0].orderId).toEqual(orderMock.id);
    expect(spy.mock.calls[0][0].productId).toEqual(productMock.id);
  });

  it('should return exception in error DB', async () => {
    jest.spyOn(orderProductRepository, 'save').mockRejectedValue(new Error());

    expect(
      service.createOrderProduct(
        productMock.id,
        orderMock.id,
        orderProductMock.price,
        orderProductMock.amount,
      ),
    ).rejects.toThrowError();
  });
});
