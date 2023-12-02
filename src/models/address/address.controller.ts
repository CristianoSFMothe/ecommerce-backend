import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';
import { UserService } from '../user/user.service';
import { CityService } from '../city/city.service';

@Controller('address')
export class AddressController {
  constructor(
    private readonly addressService: AddressService,
    private readonly userService: UserService,
    private readonly ucityService: CityService,
  ) {}

  @Post('/:userId')
  public async create(
    @Body() createAddressDto: CreateAddressDto,
    @Param('userId') userId: number,
  ): Promise<AddressEntity> {
    await this.userService.findUserById(userId);
    await this.ucityService.findCityById(createAddressDto.cityId);

    return this.addressService.createAddress(createAddressDto, userId);
  }
}
