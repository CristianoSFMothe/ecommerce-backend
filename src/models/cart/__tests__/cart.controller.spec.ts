import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from '../cart.controller';
import { cartMock } from '../__mocks__/cart.mock';
import { userEntityMock } from '../../../models/user/__mocks__/user.mock';
import { updateCartMock } from '../__mocks__/updated-cart.mock';
import { returnDeleteMock } from '../../../__mocks__/return-delete.mock';
import { insertCartMock } from '../__mocks__/insert-cart.mock';
import { CartService } from '../cart.service';

describe('CartController', () => {
  let controller: CartController;
  let cartService: CartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CartService,
          useValue: {
            insertProductInCart: jest.fn().mockResolvedValue(cartMock),
            findCartByUserId: jest.fn().mockResolvedValue(cartMock),
            clearCart: jest.fn().mockResolvedValue(returnDeleteMock),
            updatedProductInCart: jest.fn().mockResolvedValue(cartMock),
          },
        },
      ],
      controllers: [CartController],
    }).compile();

    controller = module.get<CartController>(CartController);
    cartService = module.get<CartService>(CartService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(cartService).toBeDefined();
  });

  it('should cart Entity in insertProductInCart', async () => {
    const cart = await controller.createCart(insertCartMock, userEntityMock.id);

    expect(cart).toEqual({
      id: cartMock.id,
    });
  });

  it('should cart Entity in insertProductInCart', async () => {
    const cart = await controller.findCartByUserId(userEntityMock.id);

    expect(cart).toEqual({
      id: cartMock.id,
    });
  });

  it('should return DeleteResult in clearCart', async () => {
    const cart = await controller.clearCart(userEntityMock.id);

    expect(cart).toEqual(returnDeleteMock);
  });

  it('should cart Entity in updatedProductInCart', async () => {
    const cart = await controller.updatedProductInCart(
      updateCartMock,
      userEntityMock.id,
    );

    expect(cart).toEqual({
      id: cartMock.id,
    });
  });
});
