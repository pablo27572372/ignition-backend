import { ObjectType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@ObjectType()
export class Comment {
  @Field(() => String, { description: "Comment ID" })
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { description: 'Task ID' })
  taskId: string

  @Field(() => String, { description: 'Comment Parent ID', nullable: true })
  parentId: string

  @Field(() => String, { description: 'Comment Text' })
  text: string;

  @Field(() => [Comment], { description: 'Comment Nested Comments', nullable: true })
  comments: Comment[]

  @Field(() => GraphQLISODateTime, { description: 'Comment Created', nullable: true })
  created: Date

  @Field(() => GraphQLISODateTime, { description: 'Comment Updated', nullable: true })
  updated: Date
}
