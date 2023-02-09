import { Injectable, Inject, GoneException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAttributionInput } from './dto/create-attribution.input';
import { UpdateAttributionInput } from './dto/update-attribution.input';
import { Attribution } from './entities/attribution.entity';
import { LessThan, Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { Cron } from '@nestjs/schedule';
import { ResponsabilityService } from '../responsability/responsability.service';

@Injectable()
export class AttributionService {
  constructor(
    @InjectRepository(Attribution) private readonly attRepo: Repository<Attribution>,
    @Inject(UsersService) private readonly userService : UsersService,
    @Inject(ResponsabilityService) private readonly responService : ResponsabilityService
  ){}

  async create(createAttributionInput: CreateAttributionInput) {
    const user = await this.userService.findOne(createAttributionInput.userID)
    const respo = await this.responService.findOne(createAttributionInput.responsID)
    const found = await this.attRepo.findOneBy({stopedDate: createAttributionInput.stopedDate, user, respo})
    if (user && respo && !found) {
      const stage = this.attRepo.create({stopedDate: createAttributionInput.stopedDate, user, respo})
      return await this.attRepo.save(stage)
    }
    throw new GoneException("La sauvegarde n'a pas aboutie");
  }

  async findAll() {
    return await this.attRepo.find({relations: {user: true, respo: true}});
  }

  async findOne(id: number) {
    const found = await this.attRepo.findOne({where: {_id: id}, relations: {user: true, respo: true}})
    return found ? found : null;
  }

  async update(id: number, updateAttributionInput: UpdateAttributionInput) {
    const found = await this.findOne(id)
    const preload = await this.attRepo.preload({_id: id, stopedDate: updateAttributionInput.stopedDate})
    return found ? await this.attRepo.save(preload) : null;
  }

  // @Cron('*/4 * * * * *')
  async autoRemove(id: number) {
    const now = new Date().toISOString()
    const found = await this.attRepo.find({where: {stopedDate: LessThan(`${now}`)}})
    console.log("found");
    return found ? await this.attRepo.remove(found) : null;
  }

  async remove(id: number) {
    const found = await this.findOne(id)
    return found ? await this.attRepo.remove(found) : null;
  }
}
