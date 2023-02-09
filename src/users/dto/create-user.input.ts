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
  birthDay: string;

  @Field()
  address: string;

  @Field()
  mail: string;

  @Field()
  phone: string;

  @Field({nullable: true, defaultValue: null})
  fixePhone: string;

  @Field()
  city: string;

  @Field()
  district: string;

  @Field()
  contry: string;

  // @Field({nullable: true, defaultValue: null})
  // roleID: string;

  // @Field({nullable: true, defaultValue: null})
  // structureID: string;

}
