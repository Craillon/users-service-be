import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAccessInput {
  @Field()
  libelle: string;
}
