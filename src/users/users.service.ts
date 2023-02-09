import {hash} from "bcrypt";
import { v4 as uuid } from "uuid";
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { GoneException, Injectable } from '@nestjs/common';
import { Password } from './dto/password-reset.input';
import { Structure } from './dto/attach-structure.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo : Repository<User>
  ){}

  async create(createUserInput: CreateUserInput) {
    const saltRounds = 10;
    const token = uuid().split('-').at(0).toUpperCase();
    const found = await this.userRepo.findOneBy({
      firstName: createUserInput.firstName,
      lastName: createUserInput.lastName,
    })
    if (found) {
      if (found.status == "deactivated") {
        throw new GoneException("deactivated");
      }else if (found.status == "banished"){
        throw new GoneException("banished");
      }else if (found.status == "activated"){
        throw new GoneException("activated");
      }
    }else {
      const newUser = this.userRepo.create(createUserInput)
      newUser.password = await hash(newUser.password, saltRounds);
      newUser.token = token
      return await this.userRepo.save(newUser);
    }
  }

  async findAll() {
    return await this.userRepo.find({relations: {role: {access: {responsability: true}}, attribution: true}});
  }

  async findOne(id: string) {
    const found = await this.userRepo.findOne({where: {_id: id}, relations: {role: {access: {responsability: true}}, attribution: true}});
    return found ? found : null;
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const found = await this.findOne(id)
    const preload = await this.userRepo.preload(updateUserInput)
    return found ? await this.userRepo.save(preload) : null;
  }

  async attachStructure(id: string, structureInput: Structure) {
    const found   = await this.findOne(id)
    const preload = await this.userRepo.preload(structureInput)
    return found ? await this.userRepo.save(preload) : null;
  }

  async updatePassword(id: string, updatePasswordInput: Password) {
    const found   = await this.findOne(id)
    const preload = await this.userRepo.preload(updatePasswordInput)
    const saltRounds = 10;
    preload.password = await hash(preload.password, saltRounds);
    return found ? await this.userRepo.save(preload) : null;
  }

  async remove(id: string) {
    const found = await this.findOne(id)
    return found ? await this.userRepo.remove(found) : null;
  }

}
