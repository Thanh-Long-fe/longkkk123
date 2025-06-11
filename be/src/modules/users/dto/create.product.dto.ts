import { IsOptional, IsString, MinLength, IsEnum } from 'class-validator';

export class UserDto {
  @IsString()
  userName: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  image: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  @IsOptional()
  @IsEnum(['user', 'admin'])
  role?: 'user' | 'admin';
}
