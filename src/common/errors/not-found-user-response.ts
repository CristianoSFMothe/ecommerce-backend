import { ApiProperty } from '@nestjs/swagger';
import { HttpErrorResponse } from './http-error-response';

export class UserNotFound extends HttpErrorResponse {
  @ApiProperty({
    example: 'Recurso não encontrado. Verifique os detalhes.',
  })
  declare message: string;

  @ApiProperty({
    example: 'Not Found',
  })
  declare error: string;

  @ApiProperty({
    example: 404,
  })
  declare statusCode: number;
}
