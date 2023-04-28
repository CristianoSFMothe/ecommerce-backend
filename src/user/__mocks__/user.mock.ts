import { UserType } from '../enm/user-type.enum';
import { UserEntity } from '../entities/user.entity';

export const userEntityMock: UserEntity = {
  cpf: '000.111.222-33',
  createAt: new Date(),
  email: 'user@example.com',
  id: 123456,
  name: 'John',
  password: 'password',
  phone: '(21)988775566',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
