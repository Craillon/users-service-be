import { Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateUserInput } from './create-user.input';

@InputType()
export class Password extends PartialType(CreateUserInput)  {
    @Field()
    Password: string

    @Field()
    id: string
}