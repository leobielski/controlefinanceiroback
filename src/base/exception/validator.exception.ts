import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiResponseDto } from '../dto/api-response.dto';
export class ValidatorException extends HttpException {
  constructor(message: string, data?: object) {
    const response = new ApiResponseDto(
      HttpStatus.UNPROCESSABLE_ENTITY,
      message,
      data,
    );
    super(response, HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
