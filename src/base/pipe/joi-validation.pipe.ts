import * as Joi from 'joi';
import {
  ArgumentMetadata,
  PipeTransform,
  Type,
  BadRequestException,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { messages } from 'joi-translation-pt-br';

export class JoiValidationPipe<TModel> implements PipeTransform {
  constructor(
    private readonly _validator: Joi.AnySchema,
    private readonly _itemType: Type<TModel>,
  ) {}
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value === 'string') {
      try {
        value = JSON.parse(value);
      } catch (e) {}
    }
    const valueType = plainToInstance(
      this._itemType || metadata.metatype,
      value,
    );
    const valid = this._validator.validate(valueType, {
      abortEarly: false,
      messages: messages,
    });
    if (valid.error != null) {
      throw new BadRequestException(valid.error.message);
    }
    return valueType;
  }
}
