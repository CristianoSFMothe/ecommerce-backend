import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePasswordDto {
  @IsString()
  @IsNotEmpty()
  newPassword: string;

  @IsString()
  @IsNotEmpty()
  lastPassword: string;
}
