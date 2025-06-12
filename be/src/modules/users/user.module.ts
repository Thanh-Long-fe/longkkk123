import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.schema';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy-local/auth';
import { key } from 'src/until/const';

@Module({
  imports: [
    JwtModule.register({
      secret: key,
      signOptions: { expiresIn: '15m' }, // accessToken expires in 15 minutes
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    PassportModule,
  ],
  providers: [UserRepository, UserService, LocalStrategy],
  controllers: [UserController],
})
export class UserModule {}
