import { Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateUserInput } from './create-user.input';

@InputType()
export class Structure extends PartialType(CreateUserInput)  {
    @Field()
    structureID: string

    @Field()
    id: string
}