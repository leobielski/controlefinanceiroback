import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movimentacao } from './movimentacao.entity';
import { MovimentacaoConfiguration } from './movimentacao.configuration';
import { ValidatorException } from 'src/base/exception/validator.exception';
import { MovimentacaoValidator } from './validator/movimentacao.validator';

@Injectable()
export class MovimentacaoService {
  constructor(
    @InjectRepository(MovimentacaoConfiguration)
    private movimentacaoRepository: Repository<Movimentacao>,
  ) {}
  async getAll(): Promise<Movimentacao[]> {
    return await this.movimentacaoRepository.find();
  }

  async attach(entity: Movimentacao) {
    if (await this.valid(entity))
      await this.movimentacaoRepository.save(entity);
  }

  private async valid(entity: Movimentacao): Promise<boolean> {
    const validate = MovimentacaoValidator.validate(entity);
    if (validate.error != null) {
      throw new ValidatorException(validate.error.message);
    }
    return true;
  }
}
