import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Attribution {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
