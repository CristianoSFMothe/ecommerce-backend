import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';
import { UserType } from './enums/type-user.enum';
import {
  calculateAgeFromDatePtBr,
  validateDateFormatPtBr,
} from '../utils/date.utils';
import { isValidCpf } from '../utils/validate-cpf.utils';
import { formatCpf } from '../utils/format-cpf.util';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { email, cpf, dateOfBirth } = createUserDto;

    const formattedCpf = formatCpf(cpf);

    validateDateFormatPtBr(dateOfBirth);
    isValidCpf(cpf);

    const emailExists = await this.userRepository.findOneBy({ email });
    if (emailExists) {
      throw new ConflictException(
        'Já existe um usuário cadastrado com este e-mail.',
      );
    }

    const cpfExists = await this.userRepository.findOneBy({ cpf });
    if (cpfExists) {
      throw new ConflictException(
        'Já existe um usuário cadastrado com este CPF.',
      );
    }

    const saltOrRounds = 10;
    const passwordHashed = await hash(createUserDto.password, saltOrRounds);

    const age = calculateAgeFromDatePtBr(dateOfBirth);

    const userToSave = {
      ...createUserDto,
      cpf: formattedCpf,
      typeUser: UserType.USER,
      password: passwordHashed,
      age,
    };

    return this.userRepository.save(userToSave);
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
      throw new NotFoundException('Usuário com ID não encontrado.');
    }

    return user;
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new NotFoundException('Usuário com email não encontrado.');
    }

    return user;
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    const { email, cpf, password, dateOfBirth } = updateUserDto;

    const existingUser = await this.userRepository.findOneBy({ id });

    if (!existingUser) {
      throw new NotFoundException('Usuário não encontrado');
    }

    if (email) {
      if (email === existingUser.email) {
        throw new ConflictException(
          'O e-mail informado é o mesmo já cadastrado na conta.',
        );
      }

      const emailInUse = await this.userRepository.findOneBy({ email });
      if (emailInUse && emailInUse.id !== id) {
        throw new ConflictException(
          'Já existe um usuário cadastrado com este e-mail.',
        );
      }
    }

    if (cpf) {
      if (cpf === existingUser.cpf) {
        throw new ConflictException(
          'O CPF informado é o mesmo já cadastrado na conta.',
        );
      }

      isValidCpf(cpf);
      const formattedCpf = formatCpf(cpf);
      const cpfInUse = await this.userRepository.findOneBy({
        cpf: formattedCpf,
      });
      if (cpfInUse && cpfInUse.id !== id) {
        throw new ConflictException(
          'Já existe um usuário cadastrado com este CPF.',
        );
      }

      updateUserDto.cpf = formattedCpf;
    }

    if (dateOfBirth) {
      validateDateFormatPtBr(dateOfBirth);
    }

    if (password) {
      const saltOrRounds = 10;
      updateUserDto.password = await hash(password, saltOrRounds);
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
