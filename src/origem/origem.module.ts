import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrigemConfiguration } from './origem.configuration';
import { OrigemService } from './origem.service';
import { OrigemController } from './origem.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrigemConfiguration])],
  providers: [OrigemService],
  controllers: [OrigemController],
})
export class OrigemModule {}
