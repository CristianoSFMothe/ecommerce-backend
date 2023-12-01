import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsOptional()
  complement: string;

  @IsInt()
  number: number;

  @IsString()
  @IsNotEmpty()
  cep: string;

  @IsNotEmpty()
  cityId: number;
}
