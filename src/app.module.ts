import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AccessModule } from './access/access.module';
import { AttributionModule } from './attribution/attribution.module';
import { ResponsabilityModule } from './responsability/responsability.module';
import { DB_CONNEXION_MYSQL } from './config/data-base.mysql';
import { GQL_CONFIGS } from './config/gql.config';

@Module({
  imports: [
    GQL_CONFIGS, DB_CONNEXION_MYSQL, ScheduleModule.forRoot(),
    UsersModule, RolesModule, AccessModule, AttributionModule, ResponsabilityModule
  ],
})
export class AppModule {}
