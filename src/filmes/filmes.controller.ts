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
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Filmes } from './entities/filme.entity';
import { CadastrarFilmeDto } from './dto/cadastrar-filme.dto';
import { UpdateFilmesDto } from './dto/update-filme.dto';

@Controller('filme')
export class filmesController {
  constructor(private readonly filmesService: FilmesService) {}



@Get()
async listar(): Promise<Filmes[]> {
  return this.filmesService.listar();
}

 @Post()
  async cadastrar(@Body() data: CadastrarFilmeDto): Promise<ResultadoDto>{
    return this.filmesService.cadastrar(data)
  }

 
@Delete(':id')
async remove(@Param('id') id: string) {
  return this.filmesService.remove(id);
}

@Patch(':id')
update(@Param('id') id: string, @Body() updateFilmesDto: UpdateFilmesDto) {
  return this.filmesService.update(id, updateFilmesDto);
}
 

}
//   @Post()
//   create(@Body() createFilmesDto: FilmeDto) {
//     console.log(createFilmesDto);
//     return this.filmesService.create(createFilmesDto);
//   }

//   @Get()
//   findAll() {
//     return this.filmesService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.filmesService.findOne(id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateFilmeDto) {
//     return this.filmesService.update(id, updateFilmeDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.filmesService.remove(id);
//   }
// }