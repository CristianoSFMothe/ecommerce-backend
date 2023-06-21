import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategory {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
