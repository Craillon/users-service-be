import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AttributionService } from './attribution.service';
import { Attribution } from './entities/attribution.entity';
import { CreateAttributionInput } from './dto/create-attribution.input';
import { UpdateAttributionInput } from './dto/update-attribution.input';

@Resolver(() => Attribution)
export class AttributionResolver {
  constructor(private readonly attributionService: AttributionService) {}

  @Mutation(() => Attribution)
  createAttribution(@Args('createAttributionInput') createAttributionInput: CreateAttributionInput) {
    return this.attributionService.create(createAttributionInput);
  }

  @Query(() => [Attribution], { name: 'attribution' })
  findAll() {
    return this.attributionService.findAll();
  }

  @Query(() => Attribution, { name: 'attribution' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attributionService.findOne(id);
  }

  @Mutation(() => Attribution)
  updateAttribution(@Args('updateAttributionInput') updateAttributionInput: UpdateAttributionInput) {
    return this.attributionService.update(updateAttributionInput.id, updateAttributionInput);
  }

  @Mutation(() => Attribution)
  removeAttribution(@Args('id', { type: () => Int }) id: number) {
    return this.attributionService.remove(id);
  }
}
