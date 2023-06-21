import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserId } from '../decorators/user-id.decorator';
import { CreateUserDto } from './dtos/createUser.dto';
import { ReturnUserDto } from './dtos/returnUser.dto';
import { UpdatePasswordDto } from './dtos/update-password.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
import { Roles } from '../decorators/roles.decorators';
import { UserType } from './enm/user-type.enum';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuários')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUser);
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
  async updatePasswordUser(
    @Body() updatePasswordDTO: UpdatePasswordDto,
    @UserId() userId: number,
  ): Promise<UserEntity> {
    return this.userService.updatePasswordUser(updatePasswordDTO, userId);
  }
}
