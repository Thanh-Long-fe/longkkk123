// src/category/category.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from '../users/strategy-local/jwt';
import { RequestSchema } from './entities/request.schema';
import { RequestRepository } from './repositories/request.repository';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Request', schema: RequestSchema }])],
  providers: [RequestRepository, RequestService, JwtStrategy],
  controllers: [RequestController],
})
export class RequestModule {}