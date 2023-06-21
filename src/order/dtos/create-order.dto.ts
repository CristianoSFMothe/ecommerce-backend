import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  addressId: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  amountPayments?: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  codePix?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  datePayment?: string;
}
