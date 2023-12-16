import { Controller, Get, Param } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { ReturnCepExternalDto } from './dtos/return-cep.dto';

@Controller('correios')
export class CorreiosController {
  constructor(private readonly correriosSerive: CorreiosService) {}

  @Get('/:cep')
  public async findAll(@Param('cep') cep: string): Promise<ReturnCepExternalDto> {
    return this.correriosSerive.findAddressByCep(cep);
  }
}
