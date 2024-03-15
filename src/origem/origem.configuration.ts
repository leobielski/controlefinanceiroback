import { EntitySchema } from 'typeorm';
import { DatabaseColumnSchema } from '../base/database_columns_schema';
import { Origem } from './origem.entity';
export const OrigemConfiguration = new EntitySchema<Origem>({
  name: 'origem',
  columns: {
    ...DatabaseColumnSchema,
    nome: {
      name: 'nome',
      type: 'varchar',
      length: 50,
    },
    descricao: {
      type: 'varchar',
      length: 50,
    },
  },
});
