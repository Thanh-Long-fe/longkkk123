// redis.module.ts
import { Module } from '@nestjs/common';
import { RedisModule as NestjsRedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [
    NestjsRedisModule.forRoot({
      type: 'single',
      url: 'redis://default:eNhzP187ObksrIQwJSE8CR5cGBsUh2t9@redis-15202.c240.us-east-1-3.ec2.redns.redis-cloud.com:15202',
    }),
  ],
  exports: [NestjsRedisModule],
})
export class RedisModule {}
