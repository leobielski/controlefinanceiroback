import { Base } from 'src/base/base';
import { Entity } from 'typeorm';

@Entity()
export class Operacao extends Base {
  nome: string;
  descricao: string;
}
