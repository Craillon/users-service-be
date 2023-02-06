import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Role) private readonly roleRepo : Repository<Role>
  ){}

  async create(createRoleInput: CreateRoleInput) {
    const found = await this.roleRepo.findOne({where: {name: createRoleInput.name}})
    const roleInStage = this.roleRepo.create(createRoleInput)
    return found ? null : await this.roleRepo.save(roleInStage);
  }

  async findAll() {
    return await this.roleRepo.find({relations: {access : { responsability: true}, user: true}});
  }

  async findOne(id: number) {
    const found = await this.roleRepo.findOne({where: {user: true}})
    return found ? found : null;
  }

  async update(id: number, updateRoleInput: UpdateRoleInput) {
    const roleFounded = await this.roleRepo.findOneBy({_id: id})
    
    return `This action updates a #${id} role`;
  }

  async remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
