import { Controller, Get } from '@nestjs/common';
import { CityService } from './city.service';
import { CityEntity } from './entites/city.entity';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  async getAllCity(): Promise<CityEntity[]> {
    return this.cityService.getAllCity();
  }
}
