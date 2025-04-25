import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Gender } from '../enums/gender.enum';
import { userMessage } from 'src/common/messages/user.message';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Jose Maria' })
  @IsString({
    message: userMessage.INVALID_NAME,
  })
  @IsNotEmpty({
    message: userMessage.REQUIRED_NAME,
  })
  @MaxLength(100, {
    message: userMessage.MAX_LENGTH_NAME,
  })
  name: string;

  @ApiProperty({ example: 'jose_maria@email.com' })
  @IsString({
    message: userMessage.INVALID_EMAIL,
  })
  @IsNotEmpty({
    message: userMessage.REQUIRED_EMAIL,
  })
  @IsEmail(
    {},
    {
      message: userMessage.INVALID_EMAIL_FORMAT,
    },
  )
  @MaxLength(150, {
    message: userMessage.MAX_LENGTH_EMAIL,
  })
  email: string;

  @ApiProperty({ example: '21988776655' })
  @ApiPropertyOptional()
  @IsString({ message: userMessage.INVALID_PHONE })
  @IsOptional()
  @MaxLength(20, {
    message: userMessage.MAX_LENGTH_PHONE,
  })
  @Matches(/^(\(?\d{2}\)?\s?)?\d{5}-?\d{4}$/, {
    message: userMessage.INVALID_PHONE_FORMAT,
  })
  phone?: string;

  @ApiProperty({ example: '57256174080' })
  @IsString({ message: userMessage.INVALID_CPF_FORMAT })
  @IsNotEmpty({ message: userMessage.REQUIRED_CPF })
  @MaxLength(14, { message: userMessage.MAX_LENGTH_CPF })
  cpf: string;

  @ApiProperty({ example: 'Abc@123' })
  @IsString({ message: userMessage.INVALID_PASSWORD })
  @IsNotEmpty({ message: userMessage.REQUIRED_PASSWORD })
  @MinLength(6, { message: userMessage.MIN_LENGTH_PASSWORD })
  @MaxLength(255, { message: userMessage.MAX_LENGTH_PASSWORD })
  @Matches(/[A-Z]/, {
    message: userMessage.PASSWORD_ONE_CAPITAL_LETTER,
  })
  @Matches(/[a-z]/, {
    message: userMessage.PASSWORD_ONE_LOWERCASE_LETTER,
  })
  @Matches(/\d/, {
    message: userMessage.PASSWORD_ONE_NUMBER,
  })
  @Matches(/[\W_]/, {
    message: userMessage.PASSWORD_ONE_SPECIAL_LETTER,
  })
  password: string;

  @ApiProperty({ example: '01012000' })
  @IsString({ message: userMessage.PASSWORD_ONE_CAPITAL_LETTER })
  @IsNotEmpty({ message: userMessage.REQUIRED_DATE_OF_BIRTH })
  @MaxLength(10, {
    message: userMessage.DATE_OF_BIRTH_INVALID_FORMATTING,
  })
  dateOfBirth: string;

  @ApiProperty({ example: Gender.MALE })
  @IsEnum(Gender, {
    message: userMessage.REQUIRED_ENUM,
  })
  gender: Gender;
}
