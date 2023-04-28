import { stateMock } from '../../state/__mocks__/state.mock';
import { CityEntity } from '../entites/city.entity';

export const cityMock: CityEntity = {
  createdAt: new Date(),
  id: 6543543,
  name: 'cityName',
  stateId: stateMock.id,
  updatedAt: new Date(),
};
