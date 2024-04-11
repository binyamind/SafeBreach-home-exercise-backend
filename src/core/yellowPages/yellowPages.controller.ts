import { Controller, Get, Inject, Logger, Query } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { YellowPagesService } from './yellowPages.service';

@Controller('yellow-pages')
export class YellowPagesController {
  constructor(
    private readonly yellowPagesServise:YellowPagesService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,

  ) {}

  @Get('search')
  async findAll(@Query('q') searchParam: string) {
    this.logger.verbose(`Searching for ${searchParam}`);
    return await this.yellowPagesServise.findAll(searchParam);
  }
}
