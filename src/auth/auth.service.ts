import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../models/user/entities/user.entity';
import { LoginDto } from './dtos/login.dto';
import { UserService } from 'src/models/user/user.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  public async login(loginDto: LoginDto): Promise<UserEntity> {
    const user: UserEntity | undefined = await this.userService
      .findUserByEmail(loginDto.email)
      .catch(() => undefined);

    const isMatch = await compare(loginDto.password, user?.password || '');

    if (!user || !isMatch) {
      throw new NotFoundException('E-mail or password invalid');
    }

    return user;
  }
}
