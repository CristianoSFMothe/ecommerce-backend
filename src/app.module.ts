/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './models/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from './models/state/state.module';
import { CityModule } from './models/city/city.module';
import { AddressModule } from './models/address/address.module';
import { CacheModule } from './cache/cache.module';
import { AuthModule } from './models/auth/auth.module';
import { RolesGuard } from './guards/roles.guards';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { CategoryModule } from './models/category/category.module';
import { ProductModule } from './models/product/product.module';
import { CartModule } from './models/cart/cart.module';
import { CartProductModule } from './models/cart-product/cart-product.module';
import { PaymentStatusModule } from './models/payment-status/payment-status.module';
import { PaymentModule } from './models/payment/payment.module';
import { OrderProductModule } from './models/order-product/order-product.module';
import { OrderModule } from './models/order/order.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true,
      logging: true,
    }),
    UserModule,
    StateModule,
    CityModule,
    AddressModule,
    CacheModule,
    AuthModule,
    JwtModule,
    CategoryModule,
    ProductModule,
    CartModule,
    CartProductModule,
    PaymentStatusModule,
    PaymentModule,
    OrderProductModule,
    OrderModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
