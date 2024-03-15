import { EntitySchema } from 'typeorm';
import { DatabaseColumnSchema } from '../base/database_columns_schema';

export const UserConfiguration = new EntitySchema({
  name: 'user',
  columns: {
    ...DatabaseColumnSchema,
    name: {
      type: 'varchar',
      length: 100,
    },
    email: {
      type: 'varchar',
      length: 150,
    },
    password: {
      type: 'varchar',
      length: 300,
    },
    username: {
      type: 'varchar',
      length: 100,
      unique: true,
    },
    isActive: {
      type: 'boolean',
      default: true,
    },
  },
});
