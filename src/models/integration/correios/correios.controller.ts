import { Controller, Get, Param } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { ReturnCepDto } from './dtos/return-cep.dto';

@Controller('correios')
export class CorreiosController {
  constructor(private readonly correriosSerive: CorreiosService) {}

  @Get('/:cep')
  public async findAll(@Param('cep') cep: string): Promise<ReturnCepDto> {
    return this.correriosSerive.findAddressByCep(cep);
  }
}
