import { CreateUserDto } from './dtos/createUser.dto';
import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';
import { UpdatedPasswordDto } from './dtos/update-password.dto';
import { UserId } from '../../decorators/user-id.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public async createUsers(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserEntity> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  public async getAllUsers(): Promise<ReturnUserDto[]> {
    return (await this.userService.getAllUsers()).map(
      (useEntity) => new ReturnUserDto(useEntity),
    );
  }

  @Get('/:userId')
  public async getUserById(
    @Param('userId') userId: number,
  ): Promise<ReturnUserDto> {
    return new ReturnUserDto(
      await this.userService.getUserByIdUsingRelations(userId),
    );
  }

  @Patch()
  public async updatedPasswordUser(
    @Body() updatedPasswordDto: UpdatedPasswordDto,
    @UserId() userId: number,
  ): Promise<UserEntity> {
    return this.userService.updatedPasswordUser(updatedPasswordDto, userId);
  }
}
