import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import { UserEntity } from 'src/models/user/entities/user.entity';

import * as dotenv from 'dotenv';
import { StateEntity } from 'src/models/state/entities/state.entity';
import { CityEntity } from 'src/models/city/entities/city.entity';
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [UserEntity, StateEntity, CityEntity],
  synchronize: false,
  logging: true,
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
    }),
  ],
})
export class DatabaseModule {}
