import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateResponsabilityInput {
  @Field(() => String)
  libelle: string
}
