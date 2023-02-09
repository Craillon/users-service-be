import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AttributionService } from './attribution.service';
import { Attribution } from './entities/attribution.entity';
import { CreateAttributionInput } from './dto/create-attribution.input';
import { UpdateAttributionInput } from './dto/update-attribution.input';

@Resolver(() => Attribution)
export class AttributionResolver {
  constructor(private readonly attributionService: AttributionService) {}

  @Mutation(() => Attribution, { name: 'createAttribution', nullable: true })
  createAttribution(@Args('createAttributionInput') createAttributionInput: CreateAttributionInput) {
    return this.attributionService.create(createAttributionInput);
  }

  @Query(() => [Attribution], { name: 'getAttributions', nullable: true })
  findAll() {
    return this.attributionService.findAll();
  }

  @Query(() => Attribution, { name: 'getAttribution', nullable: true })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attributionService.findOne(id);
  }

  @Mutation(() => Attribution, { name: 'updateAttribution', nullable: true })
  updateAttribution(@Args('updateAttributionInput') updateAttributionInput: UpdateAttributionInput) {
    return this.attributionService.update(updateAttributionInput.id, updateAttributionInput);
  }

  @Mutation(() => Attribution, { name: 'removeAttribution', nullable: true })
  removeAttribution(@Args('id', { type: () => Int }) id: number) {
    return this.attributionService.remove(id);
  }
}
