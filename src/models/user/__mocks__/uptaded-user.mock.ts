import { UpdatedPasswordDto } from '../dtos/update-password.dto';

export const updatedPasswordMock: UpdatedPasswordDto = {
  lastPassword: 'abc',
  newPassword: 'fdsafj',
};

export const updatedPasswordInvalidMock: UpdatedPasswordDto = {
  lastPassword: 'lkfdjsa',
  newPassword: 'flkjbla',
};
