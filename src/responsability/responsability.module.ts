import { Module } from '@nestjs/common';
import { ResponsabilityService } from './responsability.service';
import { ResponsabilityResolver } from './responsability.resolver';

@Module({
  providers: [ResponsabilityResolver, ResponsabilityService]
})
export class ResponsabilityModule {}
