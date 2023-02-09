import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateResponsabilityInput } from './dto/create-responsability.input';
import { UpdateResponsabilityInput } from './dto/update-responsability.input';
import { Responsability } from './entities/responsability.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResponsabilityService {
  constructor(
    @InjectRepository(Responsability) private readonly responsabilityRepo: Repository<Responsability>
  ){}

  async create(createResponsabilityInput: CreateResponsabilityInput) {
    const found = await this.responsabilityRepo.findOneBy({libelle: createResponsabilityInput.libelle})
    const stage = this.responsabilityRepo.create(createResponsabilityInput)
    return found ? null : await this.responsabilityRepo.save(stage);
  }

  async findAll() {
    return await this .responsabilityRepo.find();
  }

  async findOne(id: string) {
    const found = await this.responsabilityRepo.findOneBy({_id: id})
    return found ? found : null;
  }

  async update(id: string, updateResponsabilityInput: UpdateResponsabilityInput) {
    const found = await this.responsabilityRepo.findOneBy({_id: id})
    const preload = await this.responsabilityRepo.preload({_id: id, libelle: updateResponsabilityInput.libelle})
    return found ? await this.responsabilityRepo.save(preload) : null;
  }

  async remove(id: string) {
    const found = await this.responsabilityRepo.findOneBy({_id: id})
    return found ? await this.responsabilityRepo.remove(found) : null;
  }
}
