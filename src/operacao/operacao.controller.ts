import { Controller, Get, Post, Body } from '@nestjs/common';
import { OperacaoService } from './operacao.service';
import { Operacao } from './operacao.entity';
import { JoiValidationPipe } from 'src/base/pipe/joi-validation.pipe';
import { OperacaoDto } from './dto/operacao.dto';
import { OperacaoDtoValidator } from './validator/operacao-dto.validator';

@Controller('operacao')
export class OperacaoController {
  constructor(private readonly operacaoService: OperacaoService) {}

  @Get()
  public async findAll(): Promise<Operacao[]> {
    console.log(`GET operacoes`);
    return await this.operacaoService.getAll();
  }

  @Post()
  public async saveOperacao(
    @Body(new JoiValidationPipe(OperacaoDtoValidator, OperacaoDto))
    dto: OperacaoDto,
  ) {
    return await this.operacaoService.attach(OperacaoDto.toDomain(dto));
  }
}
