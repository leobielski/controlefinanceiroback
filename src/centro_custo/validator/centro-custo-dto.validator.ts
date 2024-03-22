import * as Joi from 'joi';
import { CentroCustoDto } from '../dto/centro-custo.dto';

export const CentroCustoDtoValidator = Joi.object<CentroCustoDto>({
  nome: Joi.string().max(100).required(),
  descricao: Joi.string().max(200).required(),
});
