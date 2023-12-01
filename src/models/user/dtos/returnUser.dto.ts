import { UserEntity } from '../entities/user.entity';

export class ReturnUserDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;

  constructor(userEntety: UserEntity) {
    this.id = userEntety.id;
    this.name = userEntety.name;
    this.email = userEntety.email;
    this.phone = userEntety.phone;
    this.cpf = userEntety.cpf;
  }
}
