import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export interface User extends Document {
    email: string;
    password: string;
    image: string;
    role: "user" | "admin";
    name: string;
    status: 'active' | 'inactive';
}
@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  userName: string;

  @Prop({ required: true})
  name: string;
  
  @Prop({required : true})
  password: string;

  @Prop()
  image: string;

  @Prop({required : true, default: "user"})
  role: "user" | "admin";

  @Prop({required : true, default: "active"})
  status: 'active' | 'inactive';
}

export const UserSchema = SchemaFactory.createForClass(User);