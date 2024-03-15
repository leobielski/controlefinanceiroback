import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovimentacaoService } from './movimentacao.service';
import { Movimentacao } from './movimentacao.entity';
import { MovimentacaoDto } from './dto/movimentacao.dto';
import { MovimentacaoDtoValidator } from './validator/movimentacao-dto.validator';
import { JoiValidationPipe } from 'src/base/pipe/joi-validation.pipe';

@Controller('movimentacao')
export class MovimentacaoController {
  constructor(private readonly movimentacaoService: MovimentacaoService) {}

  @Get()
  public async findAll(): Promise<Movimentacao[]> {
    return await this.movimentacaoService.getAll();
  }

  @Post()
  public async saveMovimentacao(
    @Body(new JoiValidationPipe(MovimentacaoDtoValidator, MovimentacaoDto))
    dto: MovimentacaoDto,
  ) {
    return await this.movimentacaoService.attach(MovimentacaoDto.toDomain(dto));
  }
}
