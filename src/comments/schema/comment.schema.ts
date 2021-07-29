import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Comment as SingleComment } from '../entities/comment.entity'

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop()
  taskId: string

  @Prop()
  parentId: string

  @Prop()
  text: string;

  @Prop({ type: SingleComment })
  comments: [SingleComment]

  @Prop({ type: Date })
  created: Date

  @Prop({ type: Date })
  updated: Date
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
