import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { JwtService } from '@nestjs/jwt';
import { key, keyRefresh } from 'src/until/const';
import { UserDto } from './dto/create.product.dto';
import { hashPassword } from 'src/until/hash';
import * as bcrypt from 'bcrypt';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository, private jwtService: JwtService, @InjectRedis() private readonly redis: Redis,
) {}

  async create(dto: UserDto) {
    const user = await this.userRepo.findByuserName(dto.userName)
    if(user) {
      throw new BadRequestException("User already exists");
    }
    const hashedPassword = await hashPassword(dto.password);

    return this.userRepo.createUser({...dto, password: hashedPassword});
  }
  async validateUser(userName: string, pass: string): Promise<any> {
    const user = await this.userRepo.findByuserName(userName);
    const isMatch = await bcrypt.compare(pass, user?.password!);
    // console.log(user);
    if (user && isMatch) {
      const { password, ...userWithoutPassword } = user.toObject();
      return userWithoutPassword;
    }
    return null;
  }

  async login(user: any) {
    const payload = { userName: user.userName, sub: user._id.toString(), role: user.role };
    const refreshToken = this.jwtService.sign(payload, {
      secret: keyRefresh,
      expiresIn: '7d',
    });
    await this.redis.set(`refresh:${user._id}`, refreshToken, 'EX', 7 * 24 * 60 * 60); // 7 ngày

    return {
      access_token: this.jwtService.sign(payload),
      refreshToken
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: keyRefresh,
      });
      const user = await this.userRepo.findByuserName(payload.userName);

      const storedToken = await this.redis.get(`refresh:${payload.sub}`);
      if (storedToken !== refreshToken) throw new Error('Invalid refresh token');

      if (!user) throw new UnauthorizedException('User not found');
      const newAccessToken = this.jwtService.sign(
        { sub: user._id as string, userName: user.userName, role: user.role },
        { secret: key, expiresIn: '15m' },
      );

      return { accessToken: newAccessToken };
    } catch (err) {
      throw new UnauthorizedException('Refresh token invalid or expired');
    }
  }
  
  async logout(refreshToken: string) {
    const payload = this.jwtService.verify(refreshToken, {
      secret: keyRefresh,
    });
    await this.redis.del(`refresh:${payload.sub}`);
  }

}