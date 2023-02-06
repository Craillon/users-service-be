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

  findOne(id: number) {
    return `This action returns a #${id} responsability`;
  }

  update(id: number, updateResponsabilityInput: UpdateResponsabilityInput) {
    return `This action updates a #${id} responsability`;
  }

  remove(id: number) {
    return `This action removes a #${id} responsability`;
  }
}
