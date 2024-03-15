import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrigemService } from './origem.service';
import { Origem } from './origem.entity';
import { JoiValidationPipe } from 'src/base/pipe/joi-validation.pipe';
import { OrigemDtoValidator } from './validator/origem-dto.validator';
import { OrigemDto } from './dto/origem.dto';

@Controller('origem')
export class OrigemController {
  constructor(private readonly origemService: OrigemService) {}

  @Get()
  public async findAll(): Promise<Origem[]> {
    return await this.origemService.getAll();
  }

  @Post()
  public async saveOrigem(
    @Body(new JoiValidationPipe(OrigemDtoValidator, OrigemDto)) dto: OrigemDto,
  ) {
    return await this.origemService.attach(OrigemDto.toDomain(dto));
  }
}
