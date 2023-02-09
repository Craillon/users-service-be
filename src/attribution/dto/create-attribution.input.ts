import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAttributionInput {
  @Field()
  stopedDate: string

  @Field()
  userID: string

  @Field()
  responsID: string
}
