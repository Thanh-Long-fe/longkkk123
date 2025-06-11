import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/guard/role.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/until/const';
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('requests')
export class RequestController {
  constructor(private readonly service: RequestService) {}
  @Roles(Role.USER, Role.ADMIN)
  @Post()
  create(@Body() dto: CreateRequestDto, @Req() req: any) {
    return this.service.createRequest(dto, req.user.userId);
  }

  @Roles(Role.ADMIN)
  @Get()
  findAll() {
    return this.service.getAllRequests();
  }
  @Roles(Role.ADMIN, Role.USER)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.getRequestById(id);
  }

  @Roles(Role.ADMIN)
  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.service.updateStatus(id, status);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.deleteRequest(id);
  }
}
