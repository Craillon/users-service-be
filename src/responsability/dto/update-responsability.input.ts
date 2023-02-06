import { CreateResponsabilityInput } from './create-responsability.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateResponsabilityInput extends PartialType(CreateResponsabilityInput) {
  @Field(() => String)
  id: string;
}
