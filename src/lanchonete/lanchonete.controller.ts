import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LanchoneteService } from './Lanchonete.service';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Lanchonete } from './entities/Lanchonete.entity';
import { CadastrarLanchoneteDto } from './dto/cadastra-lanche.dto';
import { UpdateLanchoneteDto } from './dto/update-Lanchonete.dto';

@Controller('Lanchonete')
export class LanchoneteController {
  constructor(private readonly LanchoneteService: LanchoneteService) {}



@Get()
async listar(): Promise<Lanchonete[]> {
  return this.LanchoneteService.listar();
}

 @Post()
  async cadastrar(@Body() data: CadastrarLanchoneteDto): Promise<ResultadoDto>{
    return this.LanchoneteService.cadastrar(data)
  }

 
@Delete('id')
async remove(@Param('id') id: string) {
  return this.LanchoneteService.remove(id);
}

@Patch('id')
update(@Param('id') id: string, @Body() updateLanchoneteDto: UpdateLanchoneteDto) {
  return this.LanchoneteService.update(id, updateLanchoneteDto);
}
 

}