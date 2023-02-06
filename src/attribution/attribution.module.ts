import { Module } from '@nestjs/common';
import { AttributionService } from './attribution.service';
import { AttributionResolver } from './attribution.resolver';

@Module({
  providers: [AttributionResolver, AttributionService]
})
export class AttributionModule {}
