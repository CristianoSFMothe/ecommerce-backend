import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';
import { Repository } from 'typeorm';
import { StateService } from '../state/state.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
    private readonly stateService: StateService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async findByName(name: string): Promise<any[]> {
    if (!name || name.trim() === '') {
      throw new BadRequestException(
        'É necessário informar o nome da cidade para realizar a busca.',
      );
    }

    return this.cityRepository
      .createQueryBuilder('city')
      .leftJoinAndSelect('city.state', 'state')
      .where('city.name ILIKE :name', { name: `%${name}%` })
      .select(['city.id', 'city.name', 'state.name', 'state.uf'])
      .getMany();
  }

  async findByStateId(stateId: string): Promise<CityEntity[]> {
    const cachedCities = await this.cacheManager.get<CityEntity[]>(
      `cities_by_state_${stateId}`,
    );
    if (cachedCities) {
      console.log('Retornando cidades do cache');
      return cachedCities;
    }

    await this.stateService.findById(stateId);

    const cities = await this.cityRepository.find({
      where: { stateId },
    });

    if (!cities || cities.length === 0) {
      throw new NotFoundException('Nenhuma cidade encontrada para o estado');
    }

    await this.cacheManager.set(`cities_by_state_${stateId}`, cities, 60); // O ttl é passado diretamente como número

    return cities;
  }
}
