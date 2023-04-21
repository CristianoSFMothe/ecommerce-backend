/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { CreateTableUser1682046212187 } from './migration/1682046212187-create_table_user';
import { CreateTableState1682047377199 } from './migration/1682047377199-create_table_state';
import { CreateTableCity1682047397631 } from './migration/1682047397631-create_table_city';
import { CreateTableAddress1682047465007 } from './migration/1682047465007-create_table_address';
import { AlterTableState1682048210986 } from './migration/1682048210986-alter_table_state';
import { InsertInState1682048288900 } from './migration/1682048288900-insert_in_state';
import { InsertInCity1682048296199 } from './migration/1682048296199-insert_in_city';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { AddressEntity } from './address/entities/address.entity';
import { CityEntity } from './city/entites/city.entity';
import { StateEntity } from './state/entites/state.entity';
import { CacheModule } from './cache/cache.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [
        UserEntity,
        AddressEntity,
        CityEntity,
        StateEntity,
      ],
      migrations: [
        CreateTableUser1682046212187,
        CreateTableState1682047377199,
        CreateTableCity1682047397631,
        CreateTableAddress1682047465007,
        AlterTableState1682048210986,
        InsertInState1682048288900,
        InsertInCity1682048296199,
      ],
      migrationsRun: true,
    }),
    UserModule,
    StateModule,
    CityModule,
    AddressModule,
    CacheModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
