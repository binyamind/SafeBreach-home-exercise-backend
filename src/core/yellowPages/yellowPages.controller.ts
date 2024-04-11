import { Controller, Get, Inject, Logger, Query } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Controller('yellow-pages/')
export class YellowPagesController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Get('search')
  async findAll(@Query() searchParam: string) {
    this.logger.verbose(`Searching for ${searchParam}`);
    return 'hello world';
  }
}
