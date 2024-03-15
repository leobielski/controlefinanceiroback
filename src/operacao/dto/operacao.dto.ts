import { Operacao } from '../operacao.entity';

export class OperacaoDto {
  nome: string;
  descricao: string;

  public static toDomain(dto: OperacaoDto, exists?: Operacao): Operacao {
    const entity = exists || new Operacao();
    entity.nome = dto.nome;
    entity.descricao = dto.descricao;
    return entity;
  }
}
