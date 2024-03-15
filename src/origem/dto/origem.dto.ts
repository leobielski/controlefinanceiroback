import { Origem } from '../origem.entity';

export class OrigemDto {
  nome: string;
  descricao: string;

  public static toDomain(dto: OrigemDto, exists?: Origem): Origem {
    const entity = exists || new Origem();
    entity.nome = dto.nome;
    entity.descricao = dto.descricao;
    return entity;
  }
}
