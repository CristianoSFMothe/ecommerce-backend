import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  complement: string;

  @IsInt()
  @ApiProperty()
  numberAddress: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  cep: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  cityId: number;
}
