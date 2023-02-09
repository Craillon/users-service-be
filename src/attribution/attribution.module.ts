import { Module } from '@nestjs/common';
import { AttributionService } from './attribution.service';
import { AttributionResolver } from './attribution.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attribution } from './entities/attribution.entity';
import { UsersModule } from '../users/users.module';
import { ResponsabilityModule } from '../responsability/responsability.module';

@Module({
  providers: [AttributionResolver, AttributionService],
  imports: [TypeOrmModule.forFeature([Attribution]), UsersModule, ResponsabilityModule]
})
export class AttributionModule {}
