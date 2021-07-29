import { InputType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { Comment } from '../entities/comment.entity'

@InputType()
export class CreateCommentInput {
  @Field(() => String, { description: 'Task ID' })
  taskId: string
  
  @Field(() => String, { description: 'Comment Parent ID', nullable: true })
  parentId: string

  @Field(() => String, { description: 'Comment Text' })
  text: string;
}
