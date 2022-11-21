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
import { FuncionarioDto } from './dto/create-funcionario.dto';

@Controller('funcionario')
export class FuncionariosController {
  funcionariosService: any;
  constructor(private readonly filmesService: FuncionariosService) {}

  @Post()
  create(@Body() createFuncionariosDto: FuncionarioDto) {
    console.log(createFuncionariosDto);
    return this.filmesService.create(createFuncionariosDto);
  }

  @Get()
  findAll() {
    return this.funcionariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.funcionariosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFuncionarioDto) {
    return this.funcionariosService.update(id, updateFuncionarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.funcionariosService.remove(id);
  }
}