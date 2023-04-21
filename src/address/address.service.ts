import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AddressEntity } from './entities/address.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}
  async getAllAddress() {
    return;
  }
}
