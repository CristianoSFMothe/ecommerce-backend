import { CreateUserDto } from '../dtos/createUser.dto';

export const createUserMock: CreateUserDto = {
  cpf: '3214215151',
  email: process.env.EMAIL_MOCK,
  name: 'qudlsjakf',
  password: process.env.PASSWORD_MOCK,
  phone: '325632634',
};
