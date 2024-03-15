import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/base/decoratos/public.decorator';
import { JoiValidationPipe } from 'src/base/pipe/joi-validation.pipe';
import { AuthDtoValidator } from './auth.validator';
import { AuthDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(
    @Body(new JoiValidationPipe(AuthDtoValidator, AuthDto))
    signInDto: AuthDto,
  ) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
