import { ReturnStateDto } from 'src/models/state/dtos/returnState.dto';
import { CityEntity } from '../entitties/city.entity';

export class ReturnCityDto {
  name: string;
  state?: ReturnStateDto;

  constructor(city: CityEntity) {
    this.name = city.name;
    this.state = city.state ? new ReturnStateDto(city.state) : undefined;
  }
}