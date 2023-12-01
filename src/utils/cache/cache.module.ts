import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { CacheModule as ChacheModuleNest } from '@nestjs/cache-manager';

@Module({
  imports: [
    ChacheModuleNest.register({
      ttl: Number(process.env.TIME_CACHE),
    }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {}
