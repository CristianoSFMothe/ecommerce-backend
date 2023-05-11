import { UpdatePasswordDto } from '../dtos/update-password.dto';

export const updatePasswordMock: UpdatePasswordDto = {
  lastPassword: 'abc',
  newPassword: 'asfas',
};

export const updatePasswordInvalidMock: UpdatePasswordDto = {
  lastPassword: 'fasf',
  newPassword: 'sfas',
};
