import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { RequestRepository } from './repositories/request.repository';

@Injectable()
export class RequestService {
  constructor(private readonly repo: RequestRepository) {}

  async createRequest(dto: CreateRequestDto, id: string) {
    const existing = await this.repo.findByUserId(id);
    if (existing) {
      throw new BadRequestException('User already has a request');
    }
    return this.repo.create({...dto, userId: id });
  }

  async getAllRequests() {
    return this.repo.findAll();
  }

  async getRequestById(id: string) {
    const req = await this.repo.findById(id);
    if (!req) throw new NotFoundException('Request not found');
    return req;
  }

  async updateStatus(id: string, status: string) {
    const updated = await this.repo.updateStatus(id, status);
    if (!updated) throw new NotFoundException('Request not found');
    return updated;
  }

  async deleteRequest(id: string) {
    return this.repo.delete(id);
  }
}
