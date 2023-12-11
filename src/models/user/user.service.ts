import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UpdatedPasswordDto } from './dtos/update-password.dto';
import {
  createPasswordHashed,
  validatePassword,
} from '../../utils/validate/password';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const emailExisting = await this.findUserByEmail(createUserDto.email).catch(
      () => undefined,
    );

    const cpfExisting = await this.findUserByCpf(createUserDto.cpf).catch(
      () => undefined,
    );

    if (emailExisting || cpfExisting) {
      throw new BadRequestException(
        'An error occurred during registration. Please try again.',
      );
    }

    const passwordHashed = await createPasswordHashed(createUserDto.password);

    return this.userRepository.save({
      ...createUserDto,
      typeUser: 1,
      password: passwordHashed,
    });
  }

  public async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  public async findUserById(userId: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new NotFoundException('UserId No Found');
    }

    return user;
  }

  public async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException('E-mail No Found');
    }

    return user;
  }

  public async findUserByCpf(cpf: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        cpf,
      },
    });

    if (!user) {
      throw new NotFoundException('Invalid CPF. Please check and try again.');
    }

    return user;
  }

  public async getUserByIdUsingRelations(userId: number): Promise<UserEntity> {
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

  public async updatedPasswordUser(
    updatedPasswordDto: UpdatedPasswordDto,
    userId: number,
  ): Promise<UserEntity> {
    const user = await this.findUserById(userId);

    const passwordHashed = await createPasswordHashed(
      updatedPasswordDto.newPassword,
    );

    const isMath = await validatePassword(
      updatedPasswordDto.lastPassword,
      user.password,
    );

    if (!isMath) {
      throw new BadRequestException(
        'Invalid password. Please check and try again.',
      );
    }

    return this.userRepository.save({
      ...user,
      password: passwordHashed,
    });
  }
}
