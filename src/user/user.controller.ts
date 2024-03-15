import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity';
import { JoiValidationPipe } from 'src/base/pipe/joi-validation.pipe';
import { UserDtoValidator } from './validator/user-dto.validator';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  public async findAll(): Promise<User[]> {
    return await this.userService.getAll();
  }

  @Post()
  public async attachUser(
    @Body(new JoiValidationPipe(UserDtoValidator, UserDto)) dto: UserDto,
  ) {
    return await this.userService.attach(UserDto.toDomain(dto));
  }
}
