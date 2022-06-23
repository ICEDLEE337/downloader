import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { initOpenapi } from './init-openapi';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT || 3333;
  await initOpenapi(app);
  await app.listen(port);
  Logger.log(
    `🚀 http://localhost:${port}`
  );
}

bootstrap();
