import { Body, Controller, Post } from '@nestjs/common';
import { ReturnUserDto } from 'src/models/user/dtos/returnUser.dto';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  public async login(@Body() loginDto: LoginDto): Promise<ReturnUserDto> {
    return new ReturnUserDto(await this.authService.login(loginDto));
  }
}
