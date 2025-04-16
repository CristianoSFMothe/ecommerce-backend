import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { DeepPartial, Repository } from 'typeorm';
import { hash } from 'bcrypt';
import { UserType } from './enums/type-user.enum';
import {
  calculateAgeFromDatePtBr,
  validateDateFormatPtBr,
} from '../utils/date.utils';
import { isValidCpf } from '../utils/validate-cpf.utils';
import { formatCpf } from '../utils/format-cpf.util';
import { formatPhoneNumber } from '../utils/formate-phone.utils';
import { userMessage } from 'src/common/messages/user.message';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { email, cpf, dateOfBirth, phone } = createUserDto;

    if (phone) {
      createUserDto.phone = formatPhoneNumber(phone);
    } else {
      createUserDto.phone = undefined;
    }

    const formattedCpf = formatCpf(cpf);
    validateDateFormatPtBr(dateOfBirth);
    isValidCpf(cpf);

    const emailExists = await this.userRepository.findOneBy({ email });
    if (emailExists) {
      throw new ConflictException(userMessage.EXISTING_EMAIL);
    }

    const cpfExists = await this.userRepository.findOneBy({
      cpf: formattedCpf,
    });
    if (cpfExists) {
      throw new ConflictException(userMessage.EXISTING_CPF);
    }

    const saltOrRounds = 10;
    const passwordHashed = await hash(createUserDto.password, saltOrRounds);

    const age = calculateAgeFromDatePtBr(dateOfBirth);

    const userToSave: DeepPartial<UserEntity> = {
      ...createUserDto,
      cpf: formattedCpf,
      password: passwordHashed,
      age,
      typeUser: UserType.USER,
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
      throw new NotFoundException(userMessage.USER_NOT_FOUND);
    }

    return user;
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new NotFoundException(userMessage.USER_EMAIL_NOT_FOUND);
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
      throw new NotFoundException(userMessage.USER_NOT_FOUND);
    }

    if (email) {
      if (email === existingUser.email) {
        throw new ConflictException(userMessage.SAME_USER_EMAIL);
      }

      const emailInUse = await this.userRepository.findOneBy({ email });
      if (emailInUse && emailInUse.id !== id) {
        throw new ConflictException(userMessage.EXISTING_EMAIL);
      }
    }

    if (cpf) {
      if (cpf === existingUser.cpf) {
        throw new ConflictException(userMessage.SAME_CPF_USER);
      }

      isValidCpf(cpf);
      const formattedCpf = formatCpf(cpf);
      const cpfInUse = await this.userRepository.findOneBy({
        cpf: formattedCpf,
      });
      if (cpfInUse && cpfInUse.id !== id) {
        throw new ConflictException(userMessage.EXISTING_CPF);
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
      throw new NotFoundException(userMessage.USER_NOT_FOUND);
    }

    return this.userRepository.save(user);
  }

  async deleteUser(id: string): Promise<{ message: string }> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(userMessage.USER_NOT_FOUND);
    }

    await this.userRepository.delete(id);

    return { message: userMessage.REMOVER_USER };
  }
}
