import { Module } from '@nestjs/common';
import { LanchoneteService } from './lanchonete.service';
import { lanchoneteController } from './lanchonete.controller';
import { lanchoneteProviders } from './lanchonete.providers';
import { databaseProviders } from 'src/database/database.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [lanchoneteController],
  providers: [LanchoneteService ,...lanchoneteProviders,...databaseProviders],
})
export class LanchoneteModule {}
export class CommonModule {}