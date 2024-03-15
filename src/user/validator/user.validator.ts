import * as Joi from 'joi';
import { User } from '../user.entity';

export const UserValidator = Joi.object<User>({
  name: Joi.string().max(100).required(),
  email: Joi.string().email().max(100).required(),
  password: Joi.string().min(6).max(20).alphanum().required(),
  username: Joi.string().max(100).required(),
  isActive: Joi.boolean().required(),
});
