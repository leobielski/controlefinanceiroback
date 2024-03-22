import * as Joi from 'joi';
import { Origem } from '../origem.entity';

export const OrigemValidator = Joi.object<Origem>({
  nome: Joi.string().max(100).required(),
  descricao: Joi.string().max(200).required(),
});
