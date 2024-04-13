import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CentroCustoConfiguration } from './centro_custo.configuration';
import { CentroCusto } from './centro_custo.entity';
import { ValidatorException } from 'src/base/exception/validator.exception';
import { CentroCustoValidator } from './validator/centro-custo.validator';

@Injectable()
export class CentroCustoService {
  constructor(
    @InjectRepository(CentroCustoConfiguration)
    private centroCustoRepository: Repository<CentroCusto>,
  ) {}
  async getAll(): Promise<CentroCusto[]> {
    return await this.centroCustoRepository.find();
  }

  async attach(entity: CentroCusto) {
    if (await this.valid(entity)) await this.centroCustoRepository.save(entity);
  }

  async delete(id: string) {
    const centroCusto = await this.centroCustoRepository.findOneByOrFail({
      id: id,
    });
    await this.centroCustoRepository.remove(centroCusto);
    return centroCusto;
  }

  private async valid(entity: CentroCusto): Promise<boolean> {
    const validate = CentroCustoValidator.validate(entity);
    if (validate.error != null) {
      throw new ValidatorException(validate.error.message);
    }
    return true;
  }
}
