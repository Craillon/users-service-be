import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class Profile {
    @Field()
    url: string

    @Field()
    userID: string
}