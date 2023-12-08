import { categoryMock } from 'src/models/category/__mocks__/category.mock';
import { UpdatedProductDto } from '../dtos/update-product.dto';

export const updatedProductMock: UpdatedProductDto = {
  categoryId: categoryMock.id,
  image: 'kjbndabk',
  name: 'gdsaga',
  price: 43.0,
};
