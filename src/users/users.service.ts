import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UsersRepository: Repository<User>){}
  
  async findByUser(username: string){
    return await this.UsersRepository.findOne({where:{username}}) 
  }
  async findById(id: string){
    return await this.UsersRepository.findOne({where:{id}}); 
  }
  
  async findAll(){
    return await this.UsersRepository.find()
  }
  
  async create(createUserDto: CreateUserDto){
    const user = await this.UsersRepository.create(createUserDto);
    return this.UsersRepository.save(user);
  }
  
  async update(id:string, updateUserDto: UpdateUserDto){
    const user = await this.UsersRepository.findOne({where:{id}});
    if(!user){
      throw new NotFoundException;
    }
    Object.assign(user, UpdateUserDto);
    return this.UsersRepository.save(user);
  }
}
