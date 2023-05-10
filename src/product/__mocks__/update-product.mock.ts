import { categoryMock } from '../../category/__mocks__/category.mock';
import { CreateProductDto } from '../dtos/create-product.dto';

export const updateProductMock: CreateProductDto = {
  categoryId: categoryMock.id,
  image: 'http://image2.jpg',
  name: 'Name Product Mock Edit',
  price: 25,
};
