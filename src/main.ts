
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 8080;
  const app = await NestFactory.create(AppModule);
  const options = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
  };

  app.enableCors(options);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 8080);
  console.log(`Cinema App Rodando na porta ${port}`);
}
bootstrap();
