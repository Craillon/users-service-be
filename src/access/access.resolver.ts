import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AccessService } from './access.service';
import { Access } from './entities/access.entity';
import { CreateAccessInput } from './dto/create-access.input';
import { UpdateAccessInput } from './dto/update-access.input';

@Resolver(() => Access)
export class AccessResolver {
  constructor(private readonly accessService: AccessService) {}

  @Mutation(() => Access, { name: 'createAccess', nullable: true  })
  createAccess(@Args('createAccessInput') createAccessInput: CreateAccessInput) {
    return this.accessService.create(createAccessInput);
  }

  @Query(() => [Access], { name: 'allAccess', nullable: true })
  findAll() {
    return this.accessService.findAll();
  }

  @Query(() => Access, { name: 'getAccess', nullable: true  })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.accessService.findOne(id);
  }

  @Mutation(() => Access, { name: 'updateAccess', nullable: true  })
  updateAccess(@Args('updateAccessInput') updateAccessInput: UpdateAccessInput) {
    return this.accessService.update(updateAccessInput.id, updateAccessInput);
  }

  @Mutation(() => Access, { name: 'removeAccess', nullable: true  })
  removeAccess(@Args('id', { type: () => String }) id: string) {
    return this.accessService.remove(id);
  }
}
