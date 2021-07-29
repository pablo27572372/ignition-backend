import { Field, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';
import { Date, Schema as MongooseSchema } from 'mongoose';
import { TaskStatus } from '../enums/task.enum';
import { Comment } from '../../comments/entities/comment.entity'


@ObjectType()
export class Task {
  @Field(() => String, { description: "Task ID" })
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { description: 'User ID', nullable: true })
  userId: string

  @Field(() => String, { description: 'Task Parent', nullable: true })
  parentId: string

  @Field(() => String, { description: 'Task Name' })
  name: string;

  @Field(() => TaskStatus, { description: 'Task Status' })
  status: string

  @Field(() => [Task], { description: 'Sub Tasks', nullable: true })
  subTasks: Task[]

  @Field(() => [Comment], { description: 'Task Comments', nullable: true })
  comments: Comment[]

  @Field(() => GraphQLISODateTime, { description: 'Task Created', nullable: true })
  created?: Date

  @Field(() => GraphQLISODateTime, { description: 'Task Updated', nullable: true })
  updated?: Date
}
