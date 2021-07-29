import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Task } from '../../tasks/entities/task.entity'

@ObjectType()
export class User {
  @Field(() => String, { description: "User ID", nullable: true })
  readonly _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { description: 'User Name' })
  username: string;

  @Field(() => String, { description: 'User Email' })
  email: string;

  @Field(() => String, { description: 'User Password' })
  password: string;

  @Field(() => [Task], { description: 'User Tasks', nullable: true })
  tasks: [Task]
}
