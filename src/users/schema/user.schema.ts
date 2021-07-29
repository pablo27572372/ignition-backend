import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Task } from '../../tasks/entities/task.entity'

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ type: Task })
  tasks: [Task]
}

export const UserSchema = SchemaFactory.createForClass(User);
