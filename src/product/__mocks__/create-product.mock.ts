import { categoryMock } from '../../category/__mocks__/category.mock';
import { CreateProductDto } from '../dtos/create-product.dto';

export const createMock: CreateProductDto = {
  categoryId: categoryMock.id,
  image: 'http://image1.jpg',
  name: 'Name Product Mock',
  price: 25,
};
