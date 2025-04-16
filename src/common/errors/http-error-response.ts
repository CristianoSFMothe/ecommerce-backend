import { ApiProperty } from '@nestjs/swagger';

export class HttpErrorResponse {
  @ApiProperty({ example: 'Mensagem de erro descritiva' })
  message: string;

  @ApiProperty({ example: 'Bad Request' })
  error: string;

  @ApiProperty({ example: 400 })
  statusCode: number;
}
