import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { filmesController } from './filmes.controller';
import { DatabaseModule } from 'src/database/database.module';
import { databaseProviders } from 'src/database/database.providers';
import { filmesProviders } from './filmes.providers';
@Module({
  imports: [DatabaseModule],
  controllers: [filmesController],
  providers: [FilmesService, ...filmesProviders, ...databaseProviders],
  exports: [FilmesService],
})
export class FilmesModule {}
export class CommonModule {}
