import { EntitySchema } from 'typeorm';
import { Movimentacao } from './movimentacao.entity';
import { DatabaseColumnSchema } from '../base/database_columns_schema';

export const MovimentacaoConfiguration = new EntitySchema<Movimentacao>({
  name: 'movimentacao',
  columns: {
    ...DatabaseColumnSchema,
    observacao: {
      name: 'observacao',
      type: 'varchar',
      length: 300,
    },
    documentoNumero: {
      name: 'documento_numero',
      type: 'varchar',
    },
    valor: {
      name: 'valor',
      type: 'decimal',
    },
    dataMovimentacao: {
      name: 'data_movimentacao',
      type: 'timestamp',
    },
  },
  relations: {
    origem: {
      target: 'origem',
      type: 'one-to-one',
      joinColumn: { referencedColumnName: 'id', name: 'origem_id' },
    },
    centroCusto: {
      target: 'centro_custo',
      type: 'one-to-one',
      joinColumn: { referencedColumnName: 'id', name: 'centro_custo_id' },
    },
    operacao: {
      target: 'operacao',
      type: 'one-to-one',
      joinColumn: { referencedColumnName: 'id', name: 'operacao_id' },
    },
    usuario: {
      target: 'user',
      type: 'one-to-one',
      joinColumn: { referencedColumnName: 'id', name: 'user_id' },
    },
  },
});
