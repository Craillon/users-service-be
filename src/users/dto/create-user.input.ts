import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  token: string;

  @Field()
  status: string;

  @Field()
  birthDay: string;

  @Field()
  address: string;

  @Field()
  mail: string;

  @Field()
  phone: string;

  @Field()
  fixePhone: string;

  @Field()
  city: string;

  @Field()
  district: string;

  @Field()
  contry: string;

  @Field()
  roleID: string;

  @Field()
  structureID: string;

}
