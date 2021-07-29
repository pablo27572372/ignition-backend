import { Field, InputType } from '@nestjs/graphql';
import { SortType } from '../enums/task.enum';

@InputType()
export class SortTaskInput {
  @Field(() => SortType, { description: 'Task Created', nullable: true })
  created: string
}
