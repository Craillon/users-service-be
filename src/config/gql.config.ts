import { ResponsabilityModule } from './../responsability/responsability.module';
import { UsersModule } from './../users/users.module';
import { ApolloDriverConfig } from "@nestjs/apollo";
import { ApolloDriver } from "@nestjs/apollo/dist/drivers";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { RolesModule } from '../roles/roles.module';
import { AccessModule } from '../access/access.module';
import { AttributionModule } from '../attribution/attribution.module';

export const GQL_CONFIGS = GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/gql/schema.gql'),
    debug: false,
    playground: true,
  })