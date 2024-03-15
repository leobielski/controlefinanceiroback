import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OperacaoConfiguration } from './operacao.configuration';
import { OperacaoService } from './operacao.service';
import { OperacaoController } from './operacao.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OperacaoConfiguration])],
  providers: [OperacaoService],
  controllers: [OperacaoController],
})
export class OperacaoModule {}
