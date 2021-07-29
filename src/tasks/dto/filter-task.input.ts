import { Field, InputType } from '@nestjs/graphql';
import { TaskStatus } from '../enums/task.enum';

@InputType()
export class FilterTaskInput {
  @Field(() => String, { description: 'User ID', nullable: true })
  userId: string

  @Field(() => TaskStatus, { description: 'Task Status' })
  status: string  
}
