import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class Password {
    @Field()
    Password: string

    @Field()
    userID: string
}