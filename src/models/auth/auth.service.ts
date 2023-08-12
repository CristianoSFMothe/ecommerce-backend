import { Injectable, NotFoundException } from '@nestjs/common';
import { validatePassword } from '../../utils/password';
import { ReturnUserDto } from '../user/dtos/returnUser.dto';
import { UserEntity } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { LoginDto } from './dtos/login.dto';
import { LoginPayload } from './dtos/loginPayload.dto';
import { ReturnLogin } from './dtos/returnLogin.dto';
import { JwtService } from '@nestjs/jwt';
import { HelperMessage } from '../../healpers/messages/message.helper';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  // Funão para login
  async login(loginDto: LoginDto): Promise<ReturnLogin> {
    const user: UserEntity | undefined = await this.userService
      .findUserByEmail(loginDto.email)
      .catch(() => undefined);

    // Validação da senha
    const isMatch = await validatePassword(
      loginDto.password,
      user?.password || '',
    );

    // Verificando a senha para validar
    if (!user || !isMatch) {
      throw new NotFoundException(HelperMessage.PASSWORD_FALL);
    }

    return {
      accessToken: this.jwtService.sign({ ...new LoginPayload(user) }),
      user: new ReturnUserDto(user),
    };
  }
}
