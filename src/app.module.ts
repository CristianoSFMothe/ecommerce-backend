/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { AddressEntity } from './address/entities/address.entity';
import { CityEntity } from './city/entites/city.entity';
import { StateEntity } from './state/entites/state.entity';
import { CacheModule } from './cache/cache.module';
import { CreateTableUser1682554242359 } from './migration/1682554242359-create_table_user';
import { CreateTableState1682554250628 } from './migration/1682554250628-create_table_state';
import { CreateTableCity1682554260954 } from './migration/1682554260954-create_table_city';
import { CreateTableAddress1682554267339 } from './migration/1682554267339-create_table_address';
import { AlterTableState1682554277490 } from './migration/1682554277490-alter_table_state';
import { InsertInState1682554605995 } from './migration/1682554605995-insert_in_state';
import { InsertInCity1682554612392 } from './migration/1682554612392-insert_in_city';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './guards/roles.guards';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AlterTableUser1682646827823 } from './migration/1682646827823-alter-table-user';
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
        CreateTableUser1682554242359,
        CreateTableState1682554250628,
        CreateTableCity1682554260954,
        CreateTableAddress1682554267339,
        AlterTableState1682554277490,
        InsertInState1682554605995,
        InsertInCity1682554612392,
        AlterTableUser1682646827823
      ],
      migrationsRun: true,
    }),
    UserModule,
    StateModule,
    CityModule,
    AddressModule,
    CacheModule,
    AuthModule,
    JwtModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
