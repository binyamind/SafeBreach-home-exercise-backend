import {
  createParamDecorator,
  ExecutionContext,
  HttpStatus,
} from '@nestjs/common';
import { Generic400Error } from 'src/models/Generic400Erorr';

export const QueryParamValidation = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    if (request.query['q'] === '')
      throw new Generic400Error('query param missing', HttpStatus.NOT_FOUND);
    return request.user;
  },
);
