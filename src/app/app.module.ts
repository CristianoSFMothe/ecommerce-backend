import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { DatabaseModule } from 'src/database/database.module';
import { AddressModule } from 'src/models/address/address.module';
import { CityModule } from 'src/models/city/city.module';
import { StateModule } from 'src/models/state/state.module';
import { UserModule } from 'src/models/user/user.module';

@Module({
  imports: [
    CacheModule.register({
      ttl: 60, // 60 segundos de cache
      isGlobal: true, // acessível em toda a aplicação
    }),
    DatabaseModule,
    UserModule,
    StateModule,
    CityModule,
    AddressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
