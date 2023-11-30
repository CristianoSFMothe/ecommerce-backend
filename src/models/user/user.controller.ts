/* eslint-disable prettier/prettier */
import { CreateUserDto } from './dtos/createUser.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public async createUsers(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  public async getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUsers();
  }
}
