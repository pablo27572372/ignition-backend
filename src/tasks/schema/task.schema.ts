import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';
import { TaskStatus } from '../enums/task.enum';
import { Task as SubTask } from '../entities/task.entity';
import { Comment } from '../../comments/entities/comment.entity'

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop()
  userId: string

  @Prop()
  parentId: string

  @Prop()
  name: string;

  @Prop({ type: TaskStatus})
  status: string

  @Prop({ type: SubTask })
  subTasks: [SubTask]

  @Prop({ type: Comment })
  comments: [Comment]

  @Prop({ type: Date })
  created: Date

  @Prop({ type: Date })
  updated: Date
}

export const TaskSchema = SchemaFactory.createForClass(Task);
