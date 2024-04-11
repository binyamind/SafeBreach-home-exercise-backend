import { DynamicModule } from '@nestjs/common';

import { SearchRepository } from './search.repository';
import { SEARCH_REPOSITORY_TOKEN } from 'src/core/constants';
import { WinstonModule } from 'nest-winston';

export class SearchRepositoryModule {
  static register(): DynamicModule {
    return {
      module: SearchRepositoryModule,
      providers: [
        {
          provide: SEARCH_REPOSITORY_TOKEN,
          useClass: SearchRepository,
        },
      ],

      exports: [SEARCH_REPOSITORY_TOKEN],
    };
  }
}
