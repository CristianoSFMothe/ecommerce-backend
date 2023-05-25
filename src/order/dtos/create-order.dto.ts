import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  addressId: number;

  @IsOptional()
  @IsNumber()
  amountPayments?: number;

  @IsOptional()
  @IsString()
  codePix?: string;

  @IsOptional()
  @IsString()
  datePayment?: string;
}
