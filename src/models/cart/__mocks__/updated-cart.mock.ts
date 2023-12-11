import { productMock } from '../../../models/product/__mocks__/product.mock';
import { UpdatedCartDto } from '../dtos/updated-cart.dto';

export const updateCartMock: UpdatedCartDto = {
  amount: 54638,
  productId: productMock.id,
};
