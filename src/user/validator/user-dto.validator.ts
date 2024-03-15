import * as Joi from 'joi';
import { UserDto } from '../dto/user.dto';

export const UserDtoValidator = Joi.object<UserDto>({
  name: Joi.string().max(100).required(),
  email: Joi.string().email().max(100).required(),
  password: Joi.string().min(6).max(20).alphanum().required(),
  username: Joi.string().max(100).required(),
  isActive: Joi.boolean().required(),
});
