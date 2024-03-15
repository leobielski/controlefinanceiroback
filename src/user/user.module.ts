import { TypeOrmModule } from '@nestjs/typeorm';
import { UserConfiguration } from './user.configuration';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([UserConfiguration])],
  providers: [UsersService],
  controllers: [UserController],
  exports: [UsersService],
})
export class UserModule {}
