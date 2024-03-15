import * as Joi from 'joi';
import { AuthDto } from './auth.dto';

export const AuthDtoValidator = Joi.object<AuthDto>({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
});
