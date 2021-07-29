import { Field, InputType, GraphQLISODateTime } from '@nestjs/graphql';
import { Date } from 'mongoose';
import { TaskStatus } from '../enums/task.enum';

@InputType()
export class CreateTaskInput {
  @Field(() => String, { description: 'Task Parent', nullable: true })
  parentId: string

  @Field(() => String, { description: 'Task Name' })
  name: string;

  @Field(() => TaskStatus, { description: 'Task Status' })
  status: string
}
