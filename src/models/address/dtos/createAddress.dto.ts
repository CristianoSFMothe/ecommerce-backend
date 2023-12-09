import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsOptional()
  complement: string;

  @IsInt()
  numberAddress: number;

  @IsString()
  @IsNotEmpty()
  cep: string;

  @IsInt()
  @IsNotEmpty()
  cityId: number;
}
