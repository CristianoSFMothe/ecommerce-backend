import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateTableUser1744323850952 } from 'src/migrations/1744323850952-CreateTableUser';
import { CreateTableState1744343489997 } from 'src/migrations/1744343489997-CreateTableState';
import { CreateTableCity1744343498972 } from 'src/migrations/1744343498972-CreateTableCity';
import { CreateTableAddress1744343516528 } from 'src/migrations/1744343516528-CreateTableAddress';
import { InsertStates1744423656700 } from 'src/migrations/1744423656700-InsertStates';
import { InsertCitiesForStateAcre1744423781550 } from 'src/migrations/1744423781550-InsertCitiesForStateAcre';
import { InsertCitiesForStateAlagoas1744424057090 } from 'src/migrations/1744424057090-InsertCitiesForStateAlagoas';
import { InsertCitiesForStateAmazonas1744424208941 } from 'src/migrations/1744424208941-InsertCitiesForStateAmazonas';
import { InsertCitiesForStateAmapa1744424335727 } from 'src/migrations/1744424335727-InsertCitiesForStateAmapa';
import { InsertCitiesForStateBahia1744424565256 } from 'src/migrations/1744424565256-InsertCitiesForStateBahia';
import { InsertCitiesForStateCeara1744426536613 } from 'src/migrations/1744426536613-InsertCitiesForStateCeara';
import { InsertCitiesForStateDF1744427295658 } from 'src/migrations/1744427295658-InsertCitiesForStateDF';
import { InsertCitiesForStateEspiritoSanto1744427639065 } from 'src/migrations/1744427639065-InsertCitiesForStateEspiritoSanto';
import { InsertCitiesForStateGoias1744427975730 } from 'src/migrations/1744427975730-InsertCitiesForStateGoias';
import { InsertCitiesForStateMaranhao1744495182259 } from 'src/migrations/1744495182259-InsertCitiesForStateMaranhao';
import { InsertCitiesForStateMinasGerais1744498169014 } from 'src/migrations/1744498169014-InsertCitiesForStateMinasGerais';

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
    InsertCitiesForStateAlagoas1744424057090,
    InsertCitiesForStateAmazonas1744424208941,
    InsertCitiesForStateAmapa1744424335727,
    InsertCitiesForStateBahia1744424565256,
    InsertCitiesForStateCeara1744426536613,
    InsertCitiesForStateDF1744427295658,
    InsertCitiesForStateEspiritoSanto1744427639065,
    InsertCitiesForStateGoias1744427975730,
    InsertCitiesForStateMaranhao1744495182259,
    InsertCitiesForStateMinasGerais1744498169014,
  ],
});
