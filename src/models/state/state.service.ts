import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateEntity } from './entities/state.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepository: Repository<StateEntity>,
  ) {}

  async findAll(): Promise<StateEntity[]> {
    return this.stateRepository.find({
      order: {
        name: 'ASC',
      },
    });
  }

  async findById(id: string): Promise<StateEntity> {
    const state = await this.stateRepository.findOneBy({ id });

    if (!state) {
      throw new NotFoundException('Estado com ID não encontrado.');
    }

    return state;
  }

  async findByName(name: string) {
    const states = await this.stateRepository.find({
      where: { name: ILike(`${name}%`) },
      order: { name: 'ASC' },
    });

    if (!states.length) {
      throw new NotFoundException('Nenhum Estado com nome encontrado.');
    }

    return states;
  }
}
