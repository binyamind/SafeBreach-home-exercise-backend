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
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('yellow-pages')
export class YellowPagesController {
  constructor(
    private readonly yellowPagesServise: YellowPagesService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}
  @ApiTags('search')
  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('search')
  @ApiResponse({ status: 200, type: Array<PersonResponse> })
  async findAll(
    @Query('q') queryParma: string,
    @QueryParamValidation('q') searchParam: string,
  ): Promise<Array<PersonResponse>> {
    this.logger.verbose(`Searching for ${searchParam}`);
    return await this.yellowPagesServise.findAll(searchParam);
  }
}
