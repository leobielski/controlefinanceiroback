import { EntitySchema } from 'typeorm';
import { DatabaseColumnSchema } from '../base/database_columns_schema';
import { CentroCusto } from './centro_custo.entity';

export const CentroCustoConfiguration = new EntitySchema<CentroCusto>({
  name: 'centro_custo',
  columns: {
    ...DatabaseColumnSchema,
    nome: {
      name: 'nome',
      type: 'varchar',
      length: 50,
    },
    descricao: {
      name: 'descricao',
      type: 'varchar',
      length: 50,
    },
  },
});
