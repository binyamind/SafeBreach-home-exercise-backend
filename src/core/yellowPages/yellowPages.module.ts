import { Module } from '@nestjs/common';
import { YellowPagesController } from './yellowPages.controller';
import { YellowPagesService } from './yellowPages.service';
import { SearchRepositoryModule } from 'src/search/search.repository.module';

@Module({
  imports: [SearchRepositoryModule.register()],
  controllers: [YellowPagesController],
  providers: [YellowPagesService],
  exports: [],
})
export class YellowPagesModule {}
