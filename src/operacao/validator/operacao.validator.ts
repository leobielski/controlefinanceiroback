import * as Joi from 'joi';
import { Operacao } from '../operacao.entity';

export const OperacaoValidator = Joi.object<Operacao>({
  nome: Joi.string().max(100).required(),
  descricao: Joi.string().max(200).required(),
});
