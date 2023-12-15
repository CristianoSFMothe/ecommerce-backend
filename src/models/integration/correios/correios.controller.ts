import { Controller, Get, Param } from '@nestjs/common';
import { CorreiosService } from './correios.service';

@Controller('correios')
export class CorreiosController {
  constructor(private readonly correriosSerive: CorreiosService) {}

  @Get('/:cep')
  public async findAll(@Param('cep') cep: string): Promise<any> {
    return this.correriosSerive.findAddressByCep(cep);
  }
}
