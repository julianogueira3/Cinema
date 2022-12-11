import { Module } from '@nestjs/common';
import { lanchoneteController } from './lanchonete.controller';
import { DatabaseModule } from 'src/database/database.module';
import { LanchoneteService } from './Lanchonete.service';
import { lanchoneteProviders } from './lanchonete.providers';
import { databaseProviders } from 'src/database/database.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [lanchoneteController],
  providers:[LanchoneteService,...lanchoneteProviders,...databaseProviders],
  exports:[LanchoneteService]
 
  
})
export class LanchoneteModule {}
export class CommonModule {}