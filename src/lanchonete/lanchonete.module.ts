import { Module } from '@nestjs/common';
import { LanchoneteService } from './lanchonete.service';
import { LanchoneteController } from './lanchonete.controller';

@Module({
  controllers: [LanchoneteController],
  providers: [LanchoneteService]
})
export class LanchoneteModule {}