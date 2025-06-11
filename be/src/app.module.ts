// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/users/user.module';
import { RedisModule } from './redis.module';
import { RequestModule } from './modules/request/request.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://root:123@cluster0.ad4342m.mongodb.net/test',
        ssl: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'test',
      }),
    }),
    RequestModule,
    UserModule,
    RedisModule,
    CloudinaryModule
  ],
})
export class AppModule {}