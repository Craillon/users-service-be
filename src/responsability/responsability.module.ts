import { Module } from '@nestjs/common';
import { ResponsabilityService } from './responsability.service';
import { ResponsabilityResolver } from './responsability.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Responsability } from './entities/responsability.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Responsability])],
  providers: [ResponsabilityResolver, ResponsabilityService],
  exports: [ResponsabilityService]
})
export class ResponsabilityModule {}
