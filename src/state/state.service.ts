import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StateEntity } from './entites/state.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepository: Repository<StateEntity>,
  ) {}

  async getAllState(): Promise<StateEntity[]> {
    return this.stateRepository.find();
  }
}