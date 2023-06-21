import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { HelperMessage } from '../../healpers/messages/message.helper';
import { RegExHelper } from '../../healpers/regex.helper';

export class UpdatePasswordDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Matches(RegExHelper.PASSWORD, { message: HelperMessage.PASSWORD_INCORRET })
  newPassword: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Matches(RegExHelper.PASSWORD, { message: HelperMessage.PASSWORD_INCORRET })
  lastPassword: string;
}
