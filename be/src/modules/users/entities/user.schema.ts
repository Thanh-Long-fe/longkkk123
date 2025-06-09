import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export interface User extends Document {
    email: string;
    password: string
}

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  userName: string;

  @Prop({ required: true})
  name: string;
  
  @Prop({required : true})
  password: string;

  @Prop({required : true, default: "user"})
  role: "user" | "admin";
}

export const UserSchema = SchemaFactory.createForClass(User);