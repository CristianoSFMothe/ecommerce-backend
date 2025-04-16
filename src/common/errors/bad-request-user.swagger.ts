import { ApiProperty } from '@nestjs/swagger';
import { HttpErrorResponse } from './http-error-response';
import { userMessage } from '../messages/user.message';

export class BadRequestUser extends HttpErrorResponse {
  @ApiProperty({
    example: userMessage.MIN_LENGTH_PASSWORD,
  })
  declare message: string;

  @ApiProperty({
    example: 'Bad Request',
  })
  declare error: string;

  @ApiProperty({
    example: 400,
  })
  declare statusCode: number;
}
