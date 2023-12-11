import { userEntityMock } from '../../models/user/__mocks__/user.mock';
import { ReturnLogin } from '../dtos/returnLogin.dto';
import { JwtMock } from './jwt.mok';

export const returnLoginMock: ReturnLogin = {
  accessToken: JwtMock,
  user: userEntityMock,
};
