import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dtos/createAddress.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  public async createAddress(
    createAddressDto: CreateAddressDto,
    userId: number,
  ) {
    return this.addressRepository.save({
      ...createAddressDto,
      userId,
    });
  }
}