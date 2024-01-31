import { productMock } from 'src/models/product/__mocks__/product.mock';
import { cartMock } from '../../cart/__mocks__/cart.mock';
import { CartProductEntity } from '../entities/cart-product.entity';

export const cartProductMock: CartProductEntity = {
  amount: 5435,
  cartId: cartMock.id,
  createdAt: new Date(),
  id: 234,
  productId: productMock.id,
  updatedAt: new Date(),
};
