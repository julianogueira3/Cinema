import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { filmesController } from './filmes.controller';

@Module({
  controllers: [filmesController ],
  providers: [FilmesService],
  exports: [FilmesService],
})
export class FilmesModule {}
export class CommonModule {}
