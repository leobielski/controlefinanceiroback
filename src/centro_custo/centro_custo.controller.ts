import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CentroCusto } from './centro_custo.entity';
import { CentroCustoService } from './centro_custo.service';
import { CentroCustoDtoValidator } from './validator/centro-custo-dto.validator';
import { CentroCustoDto } from './dto/centro-custo.dto';
import { JoiValidationPipe } from 'src/base/pipe/joi-validation.pipe';

@Controller('centrocusto')
export class CentroCustoController {
  constructor(private readonly centroCustoService: CentroCustoService) {}

  @Get()
  public async findAll(): Promise<CentroCusto[]> {
    return await this.centroCustoService.getAll();
  }

  @Post()
  public async saveCentroCusto(
    @Body(new JoiValidationPipe(CentroCustoDtoValidator, CentroCustoDto))
    dto: CentroCustoDto,
  ) {
    return await this.centroCustoService.attach(CentroCustoDto.toDomain(dto));
  }

  @Delete(':id')
  public async deleteCentroCusto(@Param('id') id: string) {
    return await this.centroCustoService.delete(id);
  }
}
