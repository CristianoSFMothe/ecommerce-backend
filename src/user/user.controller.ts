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
import { Roles } from '../decorators/roles.decorators';
import { UserType } from './enm/user-type.enum';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createUsers(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return await this.userService.createUser(createUser);
  }

  @Roles(UserType.Admin)
  @Get()
  async getAllUser(): Promise<ReturnUserDto[]> {
    return (await this.userService.getAllUser()).map(
      (userEntity) => new ReturnUserDto(userEntity),
    );
  }

  @Roles(UserType.Admin)
  @Get('/:userId')
  async getUserById(@Param('userId') userId: number): Promise<ReturnUserDto> {
    return new ReturnUserDto(
      await this.userService.getUserByIdUsingRelations(userId),
    );
  }

  @Roles(UserType.Admin, UserType.User)
  @Patch()
  @UsePipes(ValidationPipe)
  async updatePasswordUser(
    @UserId() userId: number,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ): Promise<UserEntity> {
    return this.userService.updatePasswordUser(updatePasswordDto, userId);
  }
}
