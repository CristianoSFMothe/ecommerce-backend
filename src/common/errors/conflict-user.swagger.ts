import { ApiProperty } from '@nestjs/swagger';
import { HttpErrorResponse } from './http-error-response';

export class ConflictUser extends HttpErrorResponse {
  @ApiProperty({
    example: 'Erro de conflito. Detalhes específicos podem ser fornecidos.',
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
