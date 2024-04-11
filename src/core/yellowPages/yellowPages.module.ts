import { Module } from '@nestjs/common';
import { YellowPagesController } from './yellowPages.controller';
import { YellowPagesService } from './yellowPages.service';

@Module({
  controllers: [YellowPagesController],
  providers: [YellowPagesService],
})
export class YellowPagesModule {}
