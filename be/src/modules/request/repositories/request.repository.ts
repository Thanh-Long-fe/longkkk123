import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRequestDto } from '../dto/create-request.dto';
import { Request } from '../entities/request.schema';

type RequestDocument = Request & Document;

@Injectable()
export class RequestRepository {
  constructor(
    @InjectModel(Request.name) private readonly model: Model<RequestDocument>,
  ) {}

  async create(data: CreateRequestDto): Promise<Request> {
    return this.model.create(data);
  }

  async findAll(): Promise<Request[]> {
    return this.model.find().populate('userId').exec();
  }

  async findById(id: string): Promise<Request | null> {
    return this.model.findById(id).populate('userId').exec();
  }

  async findByUserId(userId: string): Promise<Request | null> {
    return this.model.findOne({ userId }).exec();
  }

  async updateStatus(id: string, status: string): Promise<Request | null> {
    return this.model.findByIdAndUpdate(id, { status }, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id);
  }
}
