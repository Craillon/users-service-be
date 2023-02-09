import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ResponsabilityService } from './responsability.service';
import { Responsability } from './entities/responsability.entity';
import { CreateResponsabilityInput } from './dto/create-responsability.input';
import { UpdateResponsabilityInput } from './dto/update-responsability.input';

@Resolver(() => Responsability)
export class ResponsabilityResolver {
  constructor(private readonly responsabilityService: ResponsabilityService) {}

  @Mutation(() => Responsability, { name: 'createResponsability', nullable: true })
  createResponsability(@Args('createResponsabilityInput') createResponsabilityInput: CreateResponsabilityInput) {
    return this.responsabilityService.create(createResponsabilityInput);
  }

  @Query(() => [Responsability], { name: 'getResponsabilities', nullable: true })
  findAll() {
    return this.responsabilityService.findAll();
  }

  @Query(() => Responsability, { name: 'getResponsability', nullable: true })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.responsabilityService.findOne(id);
  }

  @Mutation(() => Responsability, { name: 'updateResponsability', nullable: true })
  updateResponsability(@Args('updateResponsabilityInput') updateResponsabilityInput: UpdateResponsabilityInput) {
    return this.responsabilityService.update(updateResponsabilityInput.id, updateResponsabilityInput);
  }

  @Mutation(() => Responsability, { name: 'deleteResponsability', nullable: true })
  removeResponsability(@Args('id', { type: () => String }) id: string) {
    return this.responsabilityService.remove(id);
  }

}
