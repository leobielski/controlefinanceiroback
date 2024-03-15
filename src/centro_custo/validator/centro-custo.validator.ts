import * as Joi from 'joi';
import { CentroCusto } from '../centro_custo.entity';

export const CentroCustoValidator = Joi.object<CentroCusto>({
  nome: Joi.string().max(100).required(),
  descricao: Joi.string().email().max(100).required(),
});
