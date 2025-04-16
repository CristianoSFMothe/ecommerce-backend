import { ApiProperty } from '@nestjs/swagger';
import { HttpErrorResponse } from './http-error-response';
import { userMessage } from '../messages/user.message';

export class ConflictUser extends HttpErrorResponse {
  @ApiProperty({
    example: userMessage.EXISTING_CPF,
  })
  declare message: string;

  @ApiProperty({
    example: 'Conflict',
  })
  declare error: string;

  @ApiProperty({
    example: 409,
  })
  declare statusCode: number;
}
