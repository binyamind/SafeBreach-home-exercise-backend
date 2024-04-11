import { Inject, Injectable, Logger } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PersonResponse } from 'src/models/Person.Respones';
import { Repository } from 'src/models/search.implementations.repository';
import { SEARCH_REPOSITORY_TOKEN } from '../constants';

@Injectable()
export class YellowPagesService {
  constructor(
    @Inject(SEARCH_REPOSITORY_TOKEN) private searchRpository: Repository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}
  async findAll(searchTerm: string): Promise<Array<PersonResponse>> {
    return await this.searchRpository.findAll(searchTerm);
  }
}
