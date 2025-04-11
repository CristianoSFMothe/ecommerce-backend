import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateTableUser1744323850952 } from 'src/migrations/1744323850952-CreateTableUser';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateTableUser1744323850952],
});
