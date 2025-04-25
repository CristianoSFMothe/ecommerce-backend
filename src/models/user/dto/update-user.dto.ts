import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Gender } from '../enums/gender.enum';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // Use ApiPropertyOptional para os campos
  @ApiPropertyOptional({
    example: 'Jose Maria',
  })
  name?: string;

  @ApiPropertyOptional({
    example: 'jose_maria@email.com',
  })
  email?: string;

  @ApiPropertyOptional({
    example: '21988776655',
  })
  phone?: string;

  @ApiPropertyOptional({
    example: '57256174080',
  })
  cpf?: string;

  @ApiPropertyOptional({
    example: 'Abc@123',
  })
  password?: string;

  @ApiPropertyOptional({
    example: '01012000',
  })
  dateOfBirth?: string;

  @ApiPropertyOptional({
    example: 'MALE',
  })
  gender?: Gender.MALE;
}
