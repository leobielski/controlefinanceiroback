import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MovimentacaoConfiguration } from './movimentacao.configuration';
import { MovimentacaoService } from './movimentacao.service';
import { MovimentacaoController } from './movimentacao.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MovimentacaoConfiguration])],
  providers: [MovimentacaoService],
  controllers: [MovimentacaoController],
})
export class MovimentacaoModule {}
