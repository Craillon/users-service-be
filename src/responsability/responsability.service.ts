import { Injectable } from '@nestjs/common';
import { CreateResponsabilityInput } from './dto/create-responsability.input';
import { UpdateResponsabilityInput } from './dto/update-responsability.input';

@Injectable()
export class ResponsabilityService {
  create(createResponsabilityInput: CreateResponsabilityInput) {
    return 'This action adds a new responsability';
  }

  findAll() {
    return `This action returns all responsability`;
  }

  findOne(id: string) {
    return `This action returns a #${id} responsability`;
  }

  update(id: string, updateResponsabilityInput: UpdateResponsabilityInput) {
    return `This action updates a #${id} responsability`;
  }

  remove(id: string) {
    return `This action removes a #${id} responsability`;
  }
}
