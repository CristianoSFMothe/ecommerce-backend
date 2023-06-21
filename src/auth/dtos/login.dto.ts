import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { HelperMessage } from '../../healpers/messages/message.helper';
import { RegExHelper } from '../../healpers/regex.helper';

export class LoginDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(RegExHelper.PASSWORD, { message: HelperMessage.PASSWORD_INCORRET })
  password: string;
}
