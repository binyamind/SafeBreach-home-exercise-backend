import { DynamicModule } from '@nestjs/common';
import { YellowPagesModule } from './yellowPages/yellowPages.module';

export class YellowPagesCoreModule {
  static register(): DynamicModule {
    return {
      module: YellowPagesCoreModule,
      imports: [YellowPagesModule],
    };
  }
}
