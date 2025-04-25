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
import { UserNotFound } from 'src/common/errors/not-found-user-response';
import { UpdatedUserSwagger } from 'src/common/swagger/update-user.swagger';
import { RemoverUser } from 'src/common/errors/remove-user.swagger';

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
  @ApiOperation({ summary: 'Lista todos os usuários cadastrados' })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários',
    type: UserSwagger,
    isArray: true,
  })
  async findAll(): Promise<UserEntity[]> {
    return this.userService.getAlUser();
  }

  @Get('email')
  @ApiOperation({ summary: 'Buscar um usuário pelo e-mail' })
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado com sucesso',
    type: UserSwagger,
  })
  @ApiResponse({
    status: 404,
    description: userMessage.USER_EMAIL_NOT_FOUND,
    type: UserNotFound,
  })
  findUserByEmail(@Query('email') email: string): Promise<UserEntity> {
    return this.userService.findUserByEmail(email);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um usuário por ID' })
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado com sucesso',
    type: UserSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Nenhum usuário não encontrado',
    type: UserNotFound,
  })
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.userService.findUserById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar usuário por ID' })
  @ApiResponse({
    status: 200,
    description: 'Usuário atualizado com sucesso',
    type: UpdatedUserSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro de requisição inválida',
    type: BadRequestUser,
  })
  @ApiResponse({
    status: 404,
    description: 'Nenhum usuário não encontrado',
    type: UserNotFound,
  })
  @ApiResponse({
    status: 409,
    description: 'Erro de conflito',
    type: ConflictUser,
  })
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um usuário' })
  @ApiResponse({
    status: 200,
    description: 'Usuário removido com sucesso',
    type: RemoverUser,
  })
  @ApiResponse({
    status: 404,
    description: 'Nenhum usuário não encontrado',
    type: UserNotFound,
  })
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.userService.deleteUser(id);
  }
}
