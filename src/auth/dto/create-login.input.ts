import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLoginInput {
  @Field(() => String, { description: 'Login User Name' })
  username: string;

  @Field(() => String, { description: 'Login User Password' })
  password: string;
}
