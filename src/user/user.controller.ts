/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';
import { Param } from '@nestjs/common';
import { UpdatePasswordDto } from './dtos/update-password.dto';
import { UserId } from '../decorators/user-id.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createUsers(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return await this.userService.createUser(createUser);
  }

  @Get()
  async getAllUser(): Promise<ReturnUserDto[]> {
    return (await this.userService.getAllUser()).map(
      (userEntity) => new ReturnUserDto(userEntity),
    );
  }

  @Get('/:userId')
  async getUserById(@Param('userId') userId: number): Promise<ReturnUserDto> {
    return new ReturnUserDto(
      await this.userService.getUserByIdUsingRelations(userId),
    );
  }

  @Patch()
  @UsePipes(ValidationPipe)
  async updatePasswordUser(
    @UserId() userId: number,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ): Promise<UserEntity> {
    return this.userService.updatePasswordUser(updatePasswordDto, userId);
  }
}
