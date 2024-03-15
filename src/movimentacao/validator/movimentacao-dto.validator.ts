import * as Joi from 'joi';
import { MovimentacaoDto } from '../dto/movimentacao.dto';

export const MovimentacaoDtoValidator = Joi.object<MovimentacaoDto>({
  dataMovimentacao: Joi.date().required(),
  observacao: Joi.string().max(100).optional(),
  documentoNumero: Joi.string().max(100).required(),
  valor: Joi.number().required(),
  centroCustoId: Joi.string().max(100).required(),
  origemId: Joi.string().max(100).required(),
  operacaoId: Joi.string().max(100).required(),
});
