import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @Matches(RegExHelper.PHONE)
  @ApiProperty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  cpf: string;

  @IsString()
  @ApiProperty()
  @Length(3, 50, { message: HelperMessage.INVALID_PASSWORD_LENGTH })
  @Matches(RegExHelper.PASSWORD, {
    message: HelperMessage.PASSWORD_INCORRET,
  })
  password: string;
}
