import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateRequestDto } from '../dto/create-request.dto';
import { Request } from '../entities/request.schema';

type RequestDocument = Request & Document;

@Injectable()
export class RequestRepository {
  constructor(
    @InjectModel(Request.name) private readonly model: Model<RequestDocument>,
  ) {}

  async create(data: CreateRequestDto): Promise<Request> {
    return (await this.model.create({...data, userId: new Types.ObjectId(data.userId as string)})).populate('userId');
  }

  async findAll(): Promise<Request[]> {
    return this.model.find().populate('userId').exec();
  }

  async findById(id: string): Promise<Request | null> {
    return this.model.findById(id).populate('userId').exec();
  }

  async updateRequest(
    id: string,
    data: Partial<CreateRequestDto>,
  ): Promise<Request | null> {
    return this.model
      .findByIdAndUpdate(id, { ...data }, { new: true })
      .populate('userId');
  }

  async findByUserId(userId: string): Promise<Request | null> {
    return this.model.findOne({ userId: new Types.ObjectId(userId as string) }).populate("userId").exec();
  }

  async updateStatus(id: string, status: string): Promise<Request | null> {
    return this.model.findByIdAndUpdate(id, { status }, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id);
  }
}
