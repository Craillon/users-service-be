import { GoneException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo : Repository<User>
  ){}
  async create(createUserInput: CreateUserInput) {
    const found = await this.userRepo.findOneBy({
      firstName: createUserInput.firstName,
      lastName: createUserInput.lastName,
      structureID: createUserInput.structureID
    })
    if (found.status == "deactivated") {
      throw new GoneException("deactivated");
    }else if (found.status == "banished"){
      throw new GoneException("banished");
    }else if (found.status == "activated"){
      throw new GoneException("activated");
    }else {
      const newUser = this.userRepo.create(createUserInput)
      return await this.userRepo.save(createUserInput);
    }
  }

  async findAll() {
    return await this.userRepo.find({where: {role: {access: {responsability: true}}, attribution: true}});
  }

  async findOne(id: string) {
    const found = await this.userRepo.findOne({where: {role: {access: {responsability: true}}, attribution: true}});
    return found ? found : null;
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const found = await this.findOne(id)
    const preload = await this.userRepo.preload(updateUserInput)
    return found ? await this.userRepo.save(preload) : null;
  }

  async remove(id: string) {
    const found = await this.findOne(id)
    return found ? await this.userRepo.remove(found) : null;
  }
}
