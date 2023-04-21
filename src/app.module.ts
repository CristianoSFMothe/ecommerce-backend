/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/interface/user.entity';
import { CreateTableUser1682046212187 } from './migration/1682046212187-create_table_user';
import { CreateTableState1682047377199 } from './migration/1682047377199-create_table_state';
import { CreateTableCity1682047397631 } from './migration/1682047397631-create_table_city';
import { CreateTableAddress1682047465007 } from './migration/1682047465007-create_table_address';
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
      entities: [UserEntity],
      migrations: [
        CreateTableUser1682046212187,
        CreateTableState1682047377199,
        CreateTableCity1682047397631,
        CreateTableAddress1682047465007
      ],
      migrationsRun: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
