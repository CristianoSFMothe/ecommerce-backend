import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class InsertCartDto {
  @IsNumber()
  @ApiProperty()
  productId: number;

  @IsNumber()
  @ApiProperty()
  amount: number;
}
