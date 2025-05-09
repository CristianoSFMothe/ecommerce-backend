import { Controller, Get, Param, ParseUUIDPipe, Query } from '@nestjs/common';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cidades')
@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('search')
  async findByName(@Query('name') name: string) {
    return this.cityService.findByName(name);
  }

  @Get('/:stateId')
  async findByStateId(
    @Param('stateId', new ParseUUIDPipe()) stateId: string,
  ): Promise<CityEntity[]> {
    return this.cityService.findByStateId(stateId);
  }
}
