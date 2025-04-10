import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;

    const passwordHashed = await hash(createUserDto.password, saltOrRounds);

    return this.userRepository.save({
      ...createUserDto,
      typeUser: 1,
      password: passwordHashed,
    });
  }

  async getAlUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findUserById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    return user;
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new NotFoundException(`Usuário com email ${email} não encontrado.`);
    }

    return user;
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    if (updateUserDto.password) {
      const saltOrRounds = 10;
      updateUserDto.password = await hash(updateUserDto.password, saltOrRounds);
    }

    const user = await this.userRepository.preload({
      id,
      ...updateUserDto,
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return this.userRepository.save(user);
  }

  async deleteUser(id: string): Promise<{ message: string }> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    await this.userRepository.delete(id);

    return { message: 'Usuário removido com sucesso' };
  }
}
