// request.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Request extends Document {
  @Prop({ required: true })
  accountHolderName: string; // Tên chủ tài khoản

  @Prop({ required: true })
  bankName: string; // Ngân hàng

  @Prop({ required: true })
  accountNumber: string; // Số tài khoản

  @Prop({ required: true, unique: true })
  orderCode: string; // Mã đơn

  @Prop({ required: true })
  amount: number; // Số tiền

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId; // Tham chiếu đến User

  @Prop({ required: true })
  reason: string; // Lý do

  @Prop({ enum: ['pending', 'approved', 'rejected'], default: 'pending' })
  status: string; // Trạng thái
}

export const RequestSchema = SchemaFactory.createForClass(Request);
