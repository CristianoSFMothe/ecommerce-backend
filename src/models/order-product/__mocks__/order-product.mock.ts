import { orderMock } from '../../../models/order/__mock__/order.mock';
import { productMock } from '../../../models/product/__mocks__/product.mock';
import { OrderProductEntity } from '../entites/order-product.entity';

export const orderProductMock: OrderProductEntity = {
  amount: 543,
  createdAt: new Date(),
  id: 45543,
  orderId: orderMock.id,
  price: 543.4,
  productId: productMock.id,
  updatedAt: new Date(),
};
