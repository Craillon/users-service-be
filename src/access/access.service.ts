import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAccessInput } from './dto/create-access.input';
import { UpdateAccessInput } from './dto/update-access.input';
import { Access } from './entities/access.entity';
import { Repository } from 'typeorm';
import { RolesService } from '../roles/roles.service';
import { ResponsabilityService } from '../responsability/responsability.service';

@Injectable()
export class AccessService {
  constructor(
    @InjectRepository(Access) private readonly accessRepo: Repository<Access>,
    @Inject(RolesService) private readonly roleServ: RolesService,
    @Inject(ResponsabilityService) private readonly respoServ: ResponsabilityService,
  ){}

  async create(createAccessInput: CreateAccessInput) {
    const access = await this.accessRepo.findOneBy({_id: createAccessInput.libelle})
    const role = await this.roleServ.findOne(createAccessInput.roleID)
    const responsability = await this.respoServ.findOne(createAccessInput.respoID)

    if (responsability && ! access && role) {
      const newAccess = this.accessRepo.create({ libelle: createAccessInput.libelle, role, responsability })
      return await this.accessRepo.save(newAccess)
    }
    return "La sauvegarde n'a pas aboutis";
  }

  async findAll() {
    return await this.accessRepo.find({relations: {role: true, responsability: true}});
  }

  async findOne(id: string) {
    const access = await this.accessRepo.findOneBy({_id: id})
    return access ? access : null;
  }

  async update(id: string, updateAccessInput: UpdateAccessInput) {
    const found =  await this.accessRepo.findOneBy({_id: id})
    const preload = await this.accessRepo.preload({ _id: id, libelle: updateAccessInput.libelle })
    return found ? await this.accessRepo.save(preload) : null;
  }

  async remove(id: string) {
    const found = await this.findOne(id)
    return found ? await this.accessRepo.remove(found) : null;
  }
}
