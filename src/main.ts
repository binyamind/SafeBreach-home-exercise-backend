import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.enableCors();
  const configService = app.get(ConfigService);
  const config = new DocumentBuilder()
    .setTitle('Yellow-pages-API')
    .setDescription('Yellow-pages')
    .setVersion('1.0')
    .addTag('Yellow-pages')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    deepScanRoutes: true,
  });
  SwaggerModule.setup('api', app, document);
  await app.listen(configService.get<number>('PORT') || 3001);
}
bootstrap();
