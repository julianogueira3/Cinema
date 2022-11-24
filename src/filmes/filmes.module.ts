import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { filmesController } from './filmes.controller';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  controllers: [filmesController ],
  providers: [FilmesService, PrismaService],
  exports: [FilmesService],
})
export class FilmesModule {}
export class CommonModule {}
