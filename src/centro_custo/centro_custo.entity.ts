import { Base } from 'src/base/base';
import { Entity } from 'typeorm';

@Entity()
export class CentroCusto extends Base {
  nome: string;
  descricao: string;
}
