import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 8080;
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 8080);
  console.log(`Cinema App Rodando na porta ${port}`);
}
bootstrap();
