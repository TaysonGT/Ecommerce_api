import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([User])]
})
export class UsersModule {}
