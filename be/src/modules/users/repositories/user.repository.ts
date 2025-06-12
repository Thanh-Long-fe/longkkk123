import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async findByuserName(userName: string): Promise<User | null> {
    return this.UserModel.findOne({ userName });
  }

  async createUser(data: Partial<User>): Promise<any> {
    return this.UserModel.create(data);
  }
  async updateUser(id: string, data: Partial<User>): Promise<any> {
    return this.UserModel.findByIdAndUpdate(id, { ...data }, { new: true });
  }

  async actionUser(id: string, status: 'active' | 'inactive'): Promise<any> {
    return this.UserModel.findByIdAndUpdate(
      id,
      { status: status },
      { new: true },
    );
  }

  async getListUser(): Promise<any[]> {
    return this.UserModel.find();
  }
  async getListUserId(id: string): Promise<any[]> {
    return this.UserModel.find({_id: new Types.ObjectId(id as string)});
  }
}
