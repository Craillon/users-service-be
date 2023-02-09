import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAccessInput {
  @Field()
  libelle: string;

  @Field()
  roleID: number;

  @Field()
  respoID: string;
}
