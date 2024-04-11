import { HttpException, HttpStatus } from '@nestjs/common';

export class Generic400Error extends HttpException {
  constructor(response: string | Record<string, any>, status: HttpStatus) {
    super(response, status);
  }
}
