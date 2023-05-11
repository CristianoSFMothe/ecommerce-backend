import {
  Injectable,
  NotFoundException,
  BadGatewayException,
  BadRequestException,
} from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dtos/createUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserType } from './enm/user-type.enum';
import { UpdatePasswordDto } from './dtos/update-password.dto';
import { createPasswordHashed, validatePassword } from '../utils/password';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.findUserByEmail(createUserDto.email).catch(
      () => undefined,
    );

    if (user) {
      throw new BadGatewayException('User and email already');
    }

    const passwordHash = await createPasswordHashed(createUserDto.password);

    return this.userRepository.save({
      ...createUserDto,
      typeUser: UserType.User,
      password: passwordHash,
    });
  }

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

  async getAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findUserById(userId: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new NotFoundException('User Id Not Found');
    }

    return user;
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException(`Email: ${email} Not Found`);
    }

    return user;
  }

  async updatePasswordUser(
    updatedPasswordDto: UpdatePasswordDto,
    userId: number,
  ): Promise<UserEntity> {
    const user = await this.findUserById(userId);

    const passwordHash = await createPasswordHashed(
      updatedPasswordDto.newPassword,
    );

    const isMathc = await validatePassword(
      updatedPasswordDto.lastPassword,
      user.password,
    );

    if (!isMathc) {
      throw new BadRequestException('Password or E-mail invalid.');
    }

    return this.userRepository.save({
      ...user,
      password: passwordHash,
    });
  }
}
