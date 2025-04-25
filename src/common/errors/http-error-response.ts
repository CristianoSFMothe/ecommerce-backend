import { ApiProperty } from '@nestjs/swagger';

export class HttpErrorResponse {
  @ApiProperty({
    example:
      'Erro inesperado ocorrido. Verifique os detalhes para mais informações.',
  })
  message: string;

  @ApiProperty({
    example: 'Bad Request',
  })
  error: string;

  @ApiProperty({
    example: 400,
  })
  statusCode: number;
}
