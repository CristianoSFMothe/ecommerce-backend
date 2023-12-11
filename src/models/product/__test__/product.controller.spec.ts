import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from '../product.controller';
import { productMock } from '../__mocks__/product.mock';
import { createProductMock } from '../__mocks__/create-product.mock';
import { returnDeleteMock } from '../../../__mocks__/return-delete.mock';
import { updatedProductMock } from '../__mocks__/update-product.mock';
import { ProductService } from '../product.service';

describe('ProductController', () => {
  let controller: ProductController;
  let productService: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProductService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([productMock]),
            createProduct: jest.fn().mockResolvedValue(productMock),
            updatedProduct: jest.fn().mockResolvedValue(productMock),
            deleteProduct: jest.fn().mockResolvedValue(returnDeleteMock),
          },
        },
      ],
      controllers: [ProductController],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    productService = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(productService).toBeDefined();
  });

  it('should return returnProduct in findAll', async () => {
    const products = await controller.findAll();

    expect(products).toEqual([
      {
        id: productMock.id,
        name: productMock.name,
        price: productMock.price,
        image: productMock.image,
      },
    ]);
  });

  it('should return productEntity in createProduct', async () => {
    const product = await controller.createProduct(createProductMock);

    expect(product).toEqual(productMock);
  });

  it('should return returnDelete in deletedProduct', async () => {
    const product = await controller.deleteProduct(productMock.id);

    expect(product).toEqual(returnDeleteMock);
  });

  it('should return ProductEntity in updatedProduct', async () => {
    const product = await controller.updatedProduct(
      updatedProductMock,
      productMock.id,
    );

    expect(product).toEqual(productMock);
  });
});
