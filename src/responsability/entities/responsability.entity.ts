import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Responsability {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
