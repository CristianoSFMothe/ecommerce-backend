import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';
import { ILike, Repository } from 'typeorm';
import { StateService } from '../state/state.service';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
    private readonly stateService: StateService,
  ) {}

  async findByName(name: string): Promise<CityEntity[]> {
    return this.cityRepository.find({
      where: {
        name: ILike(`%${name}%`),
      },
      select: {
        id: true,
        name: true,
      },
    });
  }

  async findByStateId(stateId: string): Promise<CityEntity[]> {
    await this.stateService.findById(stateId);

    const cities = await this.cityRepository.find({
      where: { stateId },
    });

    if (!cities || cities.length === 0) {
      throw new NotFoundException('Nenhuma cidade encontrada para o estado');
    }

    return cities;
  }
}
