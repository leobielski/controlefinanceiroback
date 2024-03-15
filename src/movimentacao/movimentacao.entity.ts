import { Base } from 'src/base/base';
import { CentroCusto } from 'src/centro_custo/centro_custo.entity';
import { Operacao } from 'src/operacao/operacao.entity';
import { Origem } from 'src/origem/origem.entity';
import { User } from 'src/user/user.entity';
import { Entity } from 'typeorm';

@Entity()
export class Movimentacao extends Base {
  dataMovimentacao: Date;
  observacao: string;
  documentoNumero: string;
  valor: number;
  centroCustoId: string;
  centroCusto?: CentroCusto;
  origemId: string;
  origem?: Origem;
  operacaoId: string;
  operacao?: Operacao;
  usuarioId: string;
  usuario?: User;
}
