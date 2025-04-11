import { Gender } from '../enums/gender.enum';

export class CreateUserDto {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
  dateOfBirth: string;
  gender: Gender;
}
