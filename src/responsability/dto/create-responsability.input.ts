import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateResponsabilityInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
