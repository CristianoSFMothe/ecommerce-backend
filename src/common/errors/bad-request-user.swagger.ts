import { ApiProperty } from '@nestjs/swagger';
import { HttpErrorResponse } from './http-error-response';

export class BadRequestUser extends HttpErrorResponse {
  @ApiProperty({
    example:
      'Erro de requisição inválida. Detalhes específicos podem ser fornecidos.',
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
