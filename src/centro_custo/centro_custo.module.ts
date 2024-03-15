import { Module } from '@nestjs/common';
import { CentroCustoService } from './centro_custo.service';
import { CentroCustoController } from './centro_custo.controller';
import { CentroCustoConfiguration } from './centro_custo.configuration';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CentroCustoConfiguration])],
  providers: [CentroCustoService],
  controllers: [CentroCustoController],
})
export class CentroCustoModule {}
