import { IsNumber } from 'class-validator';

export class UpdatedCartDto {
  @IsNumber()
  productId: number;

  @IsNumber()
  amount: number;
}
