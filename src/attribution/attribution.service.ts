import { Injectable } from '@nestjs/common';
import { CreateAttributionInput } from './dto/create-attribution.input';
import { UpdateAttributionInput } from './dto/update-attribution.input';

@Injectable()
export class AttributionService {
  create(createAttributionInput: CreateAttributionInput) {
    return 'This action adds a new attribution';
  }

  findAll() {
    return `This action returns all attribution`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attribution`;
  }

  update(id: number, updateAttributionInput: UpdateAttributionInput) {
    return `This action updates a #${id} attribution`;
  }

  remove(id: number) {
    return `This action removes a #${id} attribution`;
  }
}
