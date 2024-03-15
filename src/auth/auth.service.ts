import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { ValidatorException } from 'src/base/exception/validator.exception';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username, pass) {
    const user = await this.usersService.findOneByUsername(username);
    if (user) {
      const passwordMatch = await bcrypt.compare(pass, user.password);
      if (user.isActive) {
        if (!passwordMatch) {
          throw new ValidatorException('Usuário ou senha incorretos');
        }
      } else {
        throw new ValidatorException('Usuário ou senha incorretos');
      }
    } else {
      throw new ValidatorException('Usuário não encontrado');
    }
    const payload = { sub: user.id, username: user.username };
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
