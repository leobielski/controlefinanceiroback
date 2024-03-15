import { Movimentacao } from '../movimentacao.entity';

export class MovimentacaoDto {
  dataMovimentacao: Date;
  observacao: string;
  documentoNumero: string;
  valor: number;
  centroCustoId: string;
  origemId: string;
  operacaoId: string;

  public static toDomain(
    dto: MovimentacaoDto,
    exists?: Movimentacao,
  ): Movimentacao {
    const entity = exists || new Movimentacao();
    entity.dataMovimentacao = dto.dataMovimentacao;
    entity.observacao = dto.observacao;
    entity.documentoNumero = dto.documentoNumero;
    entity.valor = dto.valor;
    entity.centroCustoId = dto.centroCustoId;
    entity.origemId = dto.origemId;
    entity.operacaoId = dto.operacaoId;
    return entity;
  }
}
