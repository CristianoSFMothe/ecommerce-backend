import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createPasswordHashed, validatePassword } from '../utils/password';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdatePasswordDto } from './dtos/update-password.dto';
import { UserEntity } from './entities/user.entity';
import { UserType } from './enm/user-type.enum';
import { HelperMessage } from '../healpers/messages/message.helper';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  // Função para criar o usuário
  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const cpf = await this.findUserByCpf(createUserDto.cpf).catch(
      () => undefined,
    );

    const user = await this.findUserByEmail(createUserDto.email).catch(
      () => undefined,
    );

    // Verfica o usuário
    if (user) {
      throw new BadGatewayException(HelperMessage.EMAIL_AND_PASSWOR_INVALID);
    }

    if (cpf) {
      throw new BadGatewayException(HelperMessage.CPF_EXIST);
    }

    // Converte a senha
    const passwordHashed = await createPasswordHashed(createUserDto.password);

    return this.userRepository.save({
      ...createUserDto,
      typeUser: UserType.User,
      password: passwordHashed,
    });
  }

  // Função para relacionamento do usurio
  async getUserByIdUsingRelations(userId: number): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: {
        addresses: {
          city: {
            state: true,
          },
        },
      },
    });
  }

  // Função para retornar todos usuário
  async getAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  // Função para lista o usuário pelo o Id
  async findUserById(userId: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });

    // Verificar o usuário
    if (!user) {
      throw new NotFoundException(HelperMessage.USER_NOT_FOUND);
    }

    return user;
  }

  // Função para lista o usuário pelo o e-mail
  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    // Verifica se o usuário existe
    if (!user) {
      throw new NotFoundException(HelperMessage.USER_NOT_FOUND);
    }

    return user;
  }
  // Função para lista o usuário pelo o e-mail
  async findUserByCpf(cpf: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        cpf,
      },
    });

    // Verifica se o usuário existe
    if (!user) {
      throw new NotFoundException(HelperMessage.CPF_EXIST);
    }

    return user;
  }

  // Função para atualizar a senha do usuário
  async updatePasswordUser(
    updatePasswordDTO: UpdatePasswordDto,
    userId: number,
  ): Promise<UserEntity> {
    const user = await this.findUserById(userId);

    const passwordHashed = await createPasswordHashed(
      updatePasswordDTO.newPassword,
    );

    // Verifica se a senha é igual
    const isMatch = await validatePassword(
      updatePasswordDTO.lastPassword,
      user.password || '',
    );

    // Verifica se a senha existe
    if (!isMatch) {
      throw new BadRequestException(HelperMessage.LAST_PASSWORD_INVALID);
    }

    return this.userRepository.save({
      ...user,
      password: passwordHashed,
    });
  }
}
