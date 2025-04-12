import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateTableUser1744323850952 } from 'src/migrations/1744323850952-CreateTableUser';
import { CreateTableState1744343489997 } from 'src/migrations/1744343489997-CreateTableState';
import { CreateTableCity1744343498972 } from 'src/migrations/1744343498972-CreateTableCity';
import { CreateTableAddress1744343516528 } from 'src/migrations/1744343516528-CreateTableAddress';
import { InsertStates1744423656700 } from 'src/migrations/1744423656700-InsertStates';
import { InsertCitiesForStateAcre1744423781550 } from 'src/migrations/1744423781550-InsertCitiesForStateAcre';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateTableUser1744323850952,
    CreateTableState1744343489997,
    CreateTableCity1744343498972,
    CreateTableAddress1744343516528,
    InsertStates1744423656700,
    InsertCitiesForStateAcre1744423781550,
  ],
});
