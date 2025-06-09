// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/users/user.module';
import { RedisModule } from './redis.module';
import { RequestModule } from './modules/request/request.module';
// import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://root:123@cluster0.ad4342m.mongodb.net/test',
        ssl: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'test',
      }),
    }),
        // ConfigModule.forRoot(),
    RequestModule,
    UserModule,
    RedisModule
  ],
})
export class AppModule {}