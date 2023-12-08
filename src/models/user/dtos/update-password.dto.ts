import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatedPasswordDto {
  @IsString()
  @IsNotEmpty()
  newPassword: string;

  @IsString()
  @IsNotEmpty()
  lastPassword: string;
}
