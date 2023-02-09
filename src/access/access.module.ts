import { Module } from '@nestjs/common';
import { AccessService } from './access.service';
import { AccessResolver } from './access.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Access } from './entities/access.entity';
import { RolesModule } from '../roles/roles.module';
import { ResponsabilityModule } from '../responsability/responsability.module';

@Module({
  providers: [AccessResolver, AccessService],
  imports: [TypeOrmModule.forFeature([Access]), RolesModule, ResponsabilityModule],
  exports: [AccessService]
})
export class AccessModule {}
