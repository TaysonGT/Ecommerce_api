import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor( private readonly usersService: UsersService){}
  
  async login(username: string, password: string){
    const user = await this.usersService.findByUser(username)
    if(!user) throw new NotFoundException;
    if(password==user.password){
      return 'Hello Mate'
    }
  }
}
