import * as Joi from 'joi';
import { OperacaoDto } from '../dto/operacao.dto';

export const OperacaoDtoValidator = Joi.object<OperacaoDto>({
  nome: Joi.string().max(100).required(),
  descricao: Joi.string().email().max(100).required(),
});
