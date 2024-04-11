import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { YellowPagesCoreModule } from './core/yellowPages.core.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WinstonModule.forRoot({}),
    YellowPagesCoreModule.register(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
