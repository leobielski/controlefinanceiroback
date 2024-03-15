import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrigemConfiguration } from './origem.configuration';
import { Origem } from './origem.entity';
import { OrigemValidator } from './validator/origem.validator';
import { ValidatorException } from 'src/base/exception/validator.exception';

@Injectable()
export class OrigemService {
  constructor(
    @InjectRepository(OrigemConfiguration)
    private OrigemRepository: Repository<Origem>,
  ) {}

  async getAll(): Promise<Origem[]> {
    return await this.OrigemRepository.find();
  }

  async attach(entity: Origem) {
    if (await this.valid(entity)) await this.OrigemRepository.save(entity);
  }

  private async valid(entity: Origem): Promise<boolean> {
    const validate = OrigemValidator.validate(entity);
    if (validate.error != null) {
      throw new ValidatorException(validate.error.message);
    }
    return true;
  }
}
