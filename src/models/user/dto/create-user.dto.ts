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

export class CreateUserDto {
  @IsString({ message: 'O nome deve ser um texto válido.' })
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @MaxLength(100, { message: 'O nome deve conter no máximo 100 caracteres.' })
  name: string;

  @IsString({ message: 'O e-mail deve ser um texto válido.' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
  @IsEmail({}, { message: 'Informe um e-mail válido.' })
  @MaxLength(150, { message: 'O e-mail deve conter no máximo 150 caracteres.' })
  email: string;

  @IsString({ message: 'O telefone deve ser um texto válido.' })
  @IsOptional()
  @MaxLength(20, {
    message: 'O telefone deve conter no máximo 20 caracteres.',
  })
  phone?: string;

  @IsString({ message: 'O CPF deve ser um texto válido.' })
  @IsNotEmpty({ message: 'O CPF é obrigatório.' })
  @MaxLength(14, { message: 'O CPF deve conter no máximo 14 caracteres.' })
  cpf: string;

  @IsString({ message: 'A senha deve ser um texto válido.' })
  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @MinLength(6, { message: 'A senha deve conter no mínimo 6 caracteres.' })
  @MaxLength(255, { message: 'A senha deve conter no máximo 255 caracteres.' })
  @Matches(/[A-Z]/, {
    message: 'A senha deve conter ao menos uma letra maiúscula.',
  })
  @Matches(/[a-z]/, {
    message: 'A senha deve conter ao menos uma letra minúscula.',
  })
  @Matches(/\d/, {
    message: 'A senha deve conter ao menos um número.',
  })
  @Matches(/[\W_]/, {
    message: 'A senha deve conter ao menos um caractere especial.',
  })
  password: string;

  @IsString({ message: 'A data de nascimento deve ser um texto válido.' })
  @IsNotEmpty({ message: 'A data de nascimento é obrigatória.' })
  @MaxLength(10, {
    message: 'A data de nascimento deve seguir o formato dd/mm/yyyy.',
  })
  dateOfBirth: string;

  @IsEnum(Gender, {
    message: 'O campo gênero deve ser MALE ou FEMALE.',
  })
  gender: Gender;
}
