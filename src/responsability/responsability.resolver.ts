import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ResponsabilityService } from './responsability.service';
import { Responsability } from './entities/responsability.entity';
import { CreateResponsabilityInput } from './dto/create-responsability.input';
import { UpdateResponsabilityInput } from './dto/update-responsability.input';

@Resolver(() => Responsability)
export class ResponsabilityResolver {
  constructor(private readonly responsabilityService: ResponsabilityService) {}

  @Mutation(() => Responsability)
  createResponsability(@Args('createResponsabilityInput') createResponsabilityInput: CreateResponsabilityInput) {
    return this.responsabilityService.create(createResponsabilityInput);
  }

  @Query(() => [Responsability], { name: 'responsability' })
  findAll() {
    return this.responsabilityService.findAll();
  }

  @Query(() => Responsability, { name: 'responsability' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.responsabilityService.findOne(id);
  }

  @Mutation(() => Responsability)
  updateResponsability(@Args('updateResponsabilityInput') updateResponsabilityInput: UpdateResponsabilityInput) {
    return this.responsabilityService.update(updateResponsabilityInput.id, updateResponsabilityInput);
  }

  @Mutation(() => Responsability)
  removeResponsability(@Args('id', { type: () => Int }) id: number) {
    return this.responsabilityService.remove(id);
  }
}
