import {
  Controller,
  Get,
  Inject,
  Logger,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { YellowPagesService } from './yellowPages.service';
import { QueryParamValidation } from '../dto/search.dto';
import { PersonResponse } from 'src/models/Person.Respones';

@Controller('yellow-pages')
export class YellowPagesController {
  constructor(
    private readonly yellowPagesServise: YellowPagesService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}
  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('search')
  async findAll(
    @QueryParamValidation('q') searchParam: string,
  ): Promise<Array<PersonResponse>> {
    this.logger.verbose(`Searching for ${searchParam}`);
    return await this.yellowPagesServise.findAll(searchParam);
  }
}
