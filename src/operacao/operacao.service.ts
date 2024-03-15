import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OperacaoConfiguration } from './operacao.configuration';
import { Operacao } from './operacao.entity';
import { OperacaoValidator } from './validator/operacao.validator';
import { ValidatorException } from 'src/base/exception/validator.exception';

@Injectable()
export class OperacaoService {
  constructor(
    @InjectRepository(OperacaoConfiguration)
    private operacaoRepository: Repository<Operacao>,
  ) {}
  async getAll(): Promise<Operacao[]> {
    return await this.operacaoRepository.find();
  }

  async attach(entity: Operacao) {
    if (await this.valid(entity)) await this.operacaoRepository.save(entity);
  }

  private async valid(entity: Operacao): Promise<boolean> {
    const validate = OperacaoValidator.validate(entity);
    if (validate.error != null) {
      throw new ValidatorException(validate.error.message);
    }
    return true;
  }
}
