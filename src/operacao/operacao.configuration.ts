import { EntitySchema } from 'typeorm';
import { DatabaseColumnSchema } from '../base/database_columns_schema';
import { Operacao } from './operacao.entity';

export const OperacaoConfiguration = new EntitySchema<Operacao>({
  name: 'operacao',
  columns: {
    ...DatabaseColumnSchema,
    nome: {
      type: 'varchar',
      length: 50,
    },
    descricao: {
      type: 'varchar',
      length: 50,
    },
  },
});
