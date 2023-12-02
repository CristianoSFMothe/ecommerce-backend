import { ReturnAddressDto } from '../../../models/address/dtos/returnAddress.dto';
import { UserEntity } from '../entities/user.entity';

export class ReturnUserDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  addresses?: ReturnAddressDto[];

  constructor(userEntety: UserEntity) {
    this.id = userEntety.id;
    this.name = userEntety.name;
    this.email = userEntety.email;
    this.phone = userEntety.phone;
    this.cpf = userEntety.cpf;
    this.addresses = userEntety.addresses
      ? userEntety.addresses.map((address) => new ReturnAddressDto(address))
      : undefined;
  }
}
