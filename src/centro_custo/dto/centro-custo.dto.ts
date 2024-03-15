import { Base } from 'src/base/base';
import { CentroCusto } from '../centro_custo.entity';

export class CentroCustoDto {
  nome: string;
  descricao: string;

  public static toDomain(
    dto: CentroCustoDto,
    exists?: CentroCusto,
  ): CentroCusto {
    const entity = exists || new CentroCusto();
    entity.nome = dto.nome;
    entity.descricao = dto.descricao;
    return entity;
  }
}
