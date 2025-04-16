import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateEntity } from './entities/state.entity';
import { ILike, Repository } from 'typeorm';
import { stateMessage } from 'src/common/messages/state.message';

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
      throw new NotFoundException(stateMessage.STATE_NOT_FOUND);
    }

    return state;
  }

  async findByName(name: string) {
    const states = await this.stateRepository.find({
      where: { name: ILike(`${name}%`) },
      order: { name: 'ASC' },
    });

    if (!states.length) {
      throw new NotFoundException(stateMessage.STATE_NAME_FOUND);
    }

    return states;
  }
}
