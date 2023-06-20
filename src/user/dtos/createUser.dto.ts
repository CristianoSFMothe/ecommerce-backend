import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { HelperMessage } from 'src/healpers/messages/message.helper';
import { RegExHelper } from 'src/healpers/regex.helper';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @Matches(RegExHelper.PHONE)
  phone: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @Length(3, 50, { message: HelperMessage.INVALID_PASSWORD_LENGTH })
  @Matches(RegExHelper.PASSWORD, {
    message: HelperMessage.PASSWORD_INCORRET,
  })
  password: string;
}
