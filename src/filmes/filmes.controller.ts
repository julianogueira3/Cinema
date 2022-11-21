import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { FilmeDto } from './dto/create-filme.dto';

@Controller('filme')
export class filmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  create(@Body() createFilmesDto: FilmeDto) {
    console.log(createFilmesDto);
    return this.filmesService.create(createFilmesDto);
  }

  @Get()
  findAll() {
    return this.filmesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmeDto) {
    return this.filmesService.update(id, updateFilmeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmesService.remove(id);
  }
}