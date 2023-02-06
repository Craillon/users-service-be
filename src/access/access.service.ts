import { Injectable } from '@nestjs/common';
import { CreateAccessInput } from './dto/create-access.input';
import { UpdateAccessInput } from './dto/update-access.input';

@Injectable()
export class AccessService {
  create(createAccessInput: CreateAccessInput) {
    return 'This action adds a new access';
  }

  findAll() {
    return `This action returns all access`;
  }

  findOne(id: string) {
    return `This action returns a #${id} access`;
  }

  update(id: string, updateAccessInput: UpdateAccessInput) {
    return `This action updates a #${id} access`;
  }

  remove(id: string) {
    return `This action removes a #${id} access`;
  }
}
