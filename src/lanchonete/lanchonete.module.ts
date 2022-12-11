import { Module } from '@nestjs/common';
import { LanchoneteService } from './lanchonete.service';
import { LanchoneteController } from './lanchonete.controller';
import { lanchoneteProviders } from './lanchonete.providers';
import { databaseProviders } from 'src/database/database.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LanchoneteController],
  providers: [LanchoneteService ,...lanchoneteProviders,...databaseProviders],
})
export class LanchoneteModule {}