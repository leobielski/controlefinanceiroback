import * as Joi from 'joi';
import { Movimentacao } from '../movimentacao.entity';

export const MovimentacaoValidator = Joi.object<Movimentacao>({
  dataMovimentacao: Joi.date().required(),
  observacao: Joi.string().max(100).optional(),
  documentoNumero: Joi.string().max(100).required(),
  valor: Joi.number().required(),
  centroCustoId: Joi.string().max(100).required(),
  centroCusto: Joi.object().optional(),
  origemId: Joi.string().max(100).required(),
  origem: Joi.object().optional(),
  operacaoId: Joi.string().max(100).required(),
  operacao: Joi.object().optional(),
  usuarioId: Joi.string().max(100).required(),
  usuario: Joi.object().optional(),
});
