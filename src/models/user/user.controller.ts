import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserSwagger } from 'src/common/swagger/user.swagger';
import { ConflictUser } from 'src/common/errors/conflict-user.swagger';
import { userMessage } from 'src/common/messages/user.message';
import { BadRequestUser } from 'src/common/errors/bad-request-user.swagger';

@ApiTags('Usuários')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo usuário' })
  @ApiResponse({
    status: 201,
    description: 'Usuário criado com sucesso',
    type: UserSwagger,
  })
  @ApiResponse({
    status: 400,
    description: userMessage.MIN_LENGTH_PASSWORD,
    type: BadRequestUser,
  })
  @ApiResponse({
    status: 409,
    description: userMessage.EXISTING_EMAIL,
    type: ConflictUser,
  })
  createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.userService.getAlUser();
  }

  @Get('email')
  findUserByEmail(@Query('email') email: string): Promise<UserEntity> {
    return this.userService.findUserByEmail(email);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.userService.findUserById(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.userService.deleteUser(id);
  }
}
