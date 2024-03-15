import { Injectable } from '@nestjs/common';
import { UserConfiguration } from './user.configuration';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserValidator } from './validator/user.validator';
import { ValidatorException } from 'src/base/exception/validator.exception';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserConfiguration)
    private userRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOneByUsername(username: string) {
    return await this.userRepository.findOneBy({ username: username });
  }

  async attach(user: User) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    if (await this.valid(user)) await this.userRepository.save(user);
  }

  private async valid(entity: User): Promise<boolean> {
    const validate = UserValidator.validate(entity);
    if (validate.error != null) {
      throw new ValidatorException(validate.error.message);
    }
    return true;
  }
}
