import { cityMock } from '../../../models/city/__mock__/city.mock';
import { AddressEntity } from '../entities/address.entity';
import { userEntityMock } from '../../../models/user/__mock__/user.mock';

export const addressMock: AddressEntity = {
  cep: '43253252',
  cityId: cityMock.id,
  complement: 'llkdfja',
  createdAt: new Date(),
  id: 57546,
  numberAddress: 654,
  updatedAt: new Date(),
  userId: userEntityMock.id,
};
