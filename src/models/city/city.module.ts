import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';
import { StateModule } from '../state/state.module';

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity]), StateModule],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
