import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Funcionarios } from './entities/funcionario.entity';
import { CadastrarFuncionarioDto } from './dto/cadastrar-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Controller('funcionario')
export class funcionarioController {
  constructor(private readonly funcionarioService: FuncionariosService) {}



@Get()
async listar(): Promise<Funcionarios[]> {
  return this.funcionarioService.listar();
}

 @Post()
  async cadastrar(@Body() data: CadastrarFuncionarioDto): Promise<ResultadoDto>{
    return this.funcionarioService.cadastrar(data)
  }

 
@Delete(':id')
async remove(@Param('id') id: string) {
  return this.funcionarioService.remove(id);
}

@Patch(':id')
async update(@Param('id') id: string, @Body() updateFuncionarioDto: UpdateFuncionarioDto) {
  return this.funcionarioService.update(id, updateFuncionarioDto);
}
 

}