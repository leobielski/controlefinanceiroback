import * as Joi from 'joi';
import { OrigemDto } from '../dto/origem.dto';

export const OrigemDtoValidator = Joi.object<OrigemDto>({
  nome: Joi.string().max(100).required(),
  descricao: Joi.string().email().max(100).required(),
});
